FROM node:18-alpine

WORKDIR /app

COPY backend ./backend
COPY frontend ./frontend
COPY . .
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

RUN cd frontend && npm install && npm run build
RUN cd backend && npm install

CMD ["sh", "deploy/start.sh"]