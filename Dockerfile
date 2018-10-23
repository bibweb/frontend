FROM nginx:1.13.1-alpine

EXPOSE 80

COPY dist /var/www

COPY ./nginx-app.conf /etc/nginx/conf.d/default.conf

COPY ./launch-nginx.sh .

CMD ["sh", "launch-nginx.sh"]
