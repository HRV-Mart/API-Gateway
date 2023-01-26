FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
COPY . .

EXPOSE 3002 8080
CMD [ "node", "src/index.js" ]