const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const PORT = 3000;
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const ALLOWED_ORIGINS = (process.env.CORS_ORIGINS || 'http://localhost:5500,http://localhost:3000').split(',');

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
         const ext = path.extname(file.originalname);
         const basename = path.basename(file.originalname, ext);
         const safe = Date.now() + '-' + crypto.randomUUID().slice(0, 8) + '-' + basename.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');
         cb(null, safe + ext);
     }
});

const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('audio/')) {
            return cb(new Error('Invalid file type. Only audio files are allowed.'), false);
        }
        cb(null, true);
    }
});

const app = express();

// Placeholder: rate limiting — replace with express-rate-limit in production
const uploadCounts = new Map();
const RATE_WINDOW_MS = 60000; // 1 minute
const MAX_UPLOADS_PER_WINDOW = 5;

function rateLimit(req, res, next) {
    const ip = req.ip || 'unknown';
    const now = Date.now();
    let record = uploadCounts.get(ip) || { count: 0, windowStart: now };
    if (now - record.windowStart > RATE_WINDOW_MS) {
        record = { count: 0, windowStart: now };
    }
    record.count++;
    if (record.count > MAX_UPLOADS_PER_WINDOW) {
        return res.status(429).json({ error: 'Too many requests. Try again later.' });
    }
    uploadCounts.set(ip, record);
    next();
}

app.use(rateLimit);

app.use((req, res, next) => {
    const origin = req.headers.origin || '';
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

// Placeholder: API key auth — replace with real auth (e.g., JWT, session)
const API_KEY = process.env.UPLOAD_API_KEY || 'dev-key-replace-me';

function checkAuth(req, res, next) {
    const key = req.headers['x-api-key'] || req.query.apikey || '';
    if (key === API_KEY) return next();
    return res.status(401).json({ error: 'Unauthorized' });
}

app.post('/upload', checkAuth, upload.single('file'), (req, res) => {
     if (!req.file) {
         return res.status(400).json({ error: 'No file uploaded' });
     }

    const response = {
        id: crypto.randomUUID(),
        originalName: req.file.originalname,
        storedFilename: req.file.filename,
        url: `/uploads/${req.file.filename}`,
        size: req.file.size,
        mimeType: req.file.mimetype
    };

    res.json(response);
});

// Error handling middleware for multer
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({ error: 'File too large. Maximum size is 50MB.' });
        }
        return res.status(400).json({ error: err.message });
    }
    if (err) {
        return res.status(400).json({ error: err.message });
    }
    next();
});

app.use('/uploads', express.static(UPLOAD_DIR));

app.listen(PORT, () => console.log(`Upload server running on http://localhost:${PORT}`));
