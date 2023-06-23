# Base image
FROM node:16-alpine

COPY .env /tmp/.env

ENV POSTGRES_USER=""
ENV POSTGRES_PASSWORD=""
ENV POSTGRES_DB=""
ENV POSTGRES_PORT=""
ENV BACKEND_PORT=""
ENV VALIDATION_SERVER_PORT=""
ENV KAFKA_PORT=""
ENV KAFKA_HOST=""
ENV KAFKA_MESSAGE_PATTERN=""
ENV KAFKA_CLIENT_ID=""
ENV KAFKA_GROUP_ID=""
ENV KAFKA_PROVIDER=""

ENV ZOOKEEPER_CLIENT_PORT=""
ENV ZOOKEEPER_TICK_TIME=""


RUN echo "source /tmp/.env" > /docker-entrypoint-initdb.d/load-env.sh
# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --silent

# Bundle app source
COPY . .

EXPOSE 8081

CMD npm start