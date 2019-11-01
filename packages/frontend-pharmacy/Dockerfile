FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm i -g serve
ADD ./build /app/build
CMD serve -s build -l 3000
EXPOSE 3000