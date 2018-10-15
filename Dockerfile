#==================== Building Stage ================================================

FROM node:alpine AS builder
LABEL stage=intermediate
RUN apk update && apk add --no-cache make git

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json /app/

# Install dependencies using npm
RUN cd /app && npm set progress=false && npm install

COPY . /app

RUN cd /app && npm run build

#==================== Setting up stage ====================
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx-app.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/bibweb-frontend/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
