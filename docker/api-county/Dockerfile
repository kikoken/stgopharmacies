FROM node:latest

WORKDIR /app

COPY package.json .

COPY /dist .

RUN npm install --production

EXPOSE 3001

CMD ["node", "app.js"]

