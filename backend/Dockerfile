FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i

# For building code for production, omit dev dependencies
# RUN npm ci --omit=dev

# Adding bash because Alpine base image doesn't have bash pre-installed
RUN apk update && apk add bash

# Bundle app source
COPY . .

EXPOSE 5001
CMD [ "npm", "start" ]
