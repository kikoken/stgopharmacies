FROM node:latest

WORKDIR /app

COPY package.json .

COPY /dist .

RUN npm install --production

EXPOSE 3000

CMD ["node", "app.js"]

