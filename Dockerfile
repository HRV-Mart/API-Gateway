FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV HASHED_SECRET=secret
ENV USER_SERVER_URL=http://localhost:8080/user
ENV PRODUCT_SERVER_URL=http://localhost:8081/product
ENV AUTH_SERVER_URL=http://localhost:8082/auth
ENV CART_SERVER_URL=http://localhost:8083/cart
ENV LIKE_SERVER_URL=http://localhost:8084/like
ENV ORDER_SERVER_URL=http://localhost:8085/order
ENV JWT_SECRET=secret
ENV APPLICATION_PORT=3002


RUN npm i
COPY . .

EXPOSE 3002
CMD [ "node", "src/index.js" ]
