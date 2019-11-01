FROM node:latest

WORKDIR /app

COPY /build .

RUN npm install -g serve

EXPOSE 3000

RUN node /app/index.js

