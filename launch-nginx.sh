#!/bin/sh
ls -l /var/www/bibweb-frontend/
mainFile="$(find /var/www/bibweb-frontend/ -name main*.js)"
sed -i -E "s|bibwebApiUrl:[ ]*[\"\'][a-zA-Z0-9.\/:]*[\"\']|bibwebApiUrl: \'$API_URL\'|" ${mainFile}
nginx -g "daemon off;"
