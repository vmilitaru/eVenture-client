# Dockerfile

# base image
FROM node:12.18-alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# install dependencies
RUN npm install

# copy source files
COPY . /usr/src

# start app
RUN npm run build

EXPOSE 3000

CMD npm run start