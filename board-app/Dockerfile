FROM node:22.13.1 AS builder

ENV VITE_REST_API_HOST=192.168.0.241
ENV VITE_REST_API_PORT=8080

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx


COPY --from=builder /app/dist /usr/share/nginx/html