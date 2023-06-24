

FROM node:16-alpine

CMD source .env

WORKDIR /app

COPY package*.json ./

RUN npm install --silent
RUN npm i -g typeorm ts-node

COPY . .

EXPOSE 8080

CMD npm run typeorm:create-entities && npm run migration:up && npm start