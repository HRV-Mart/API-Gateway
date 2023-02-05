FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV HASHED_SECRET=secret
ENV AUTH_SERVER_URL=http://localhost:8082/auth
ENV USER_SERVER_URL=http://localhost:8080/user
ENV PRODUCT_SERVER_URL=http://localhost:8081/product
ENV AUTH_SERVER_URL=secret


RUN npm i
COPY . .

EXPOSE 3002 8080 8081 8082
CMD [ "node", "src/index.js" ]
