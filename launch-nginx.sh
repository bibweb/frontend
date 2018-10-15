#!/bin/sh
ls -l /usr/share/nginx/html/
mainFile="$(find /usr/share/nginx/html/ -name main*.js)"
sed -i -E "s|bibwebApiUrl:[ ]*[\"\'][a-zA-Z0-9.\/:]*[\"\']|bibwebApiUrl: \'$API_URL\'|" ${mainFile}
nginx -g "daemon off;"