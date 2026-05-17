FROM node:18-alpine

WORKDIR /app

COPY backend ./backend
COPY frontend ./frontend
COPY . .
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

RUN cd frontend && npm install && npm run build && \
    mkdir -p /app/frontend/dist && cp -r frontend/dist/* /app/frontend/dist/ && \
    echo "=== FRONTEND DIST LISTING ===" && ls -la frontend/dist || true && \
    echo "=== DIST JS LISTING ===" && ls -la frontend/dist/js || true && \
    echo "=== SHOW INDEX.HTML HEAD ===" && head -n 20 frontend/dist/index.html || echo "NO INDEX.HTML"
RUN cd backend && npm install

CMD ["sh", "deploy/start.sh"]