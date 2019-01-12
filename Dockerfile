FROM node:11.6.0-alpine

WORKDIR /home/app/
COPY . /home/app/
RUN npm install --verbose
