# Base image
FROM node:16-alpine

CMD source .env
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