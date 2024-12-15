# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем статические файлы в директорию, которую обслуживает Nginx
COPY ./dist /usr/share/nginx/html

# Открываем порт 80 (HTTP)
EXPOSE 80