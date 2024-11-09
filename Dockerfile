FROM nginx:1.27-alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /app
