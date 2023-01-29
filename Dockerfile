FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
COPY . .

EXPOSE 3002 8080 8081 8082
CMD [ "node", "src/index.js" ]
