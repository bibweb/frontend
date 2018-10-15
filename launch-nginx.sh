#!/bin/sh
ls -l /usr/share/nginx/html/
sed -i "/apiUrl: /c\\apiUrl: \'$API_URL\'" /usr/share/nginx/html/main.js
nginx -g "daemon off;"