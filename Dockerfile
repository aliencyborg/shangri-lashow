# BUILD
FROM node:lts-alpine as build

MAINTAINER Benjamin Rosas <ben@aliencyb.org>

WORKDIR /app/

RUN apk add git
RUN npm install -g --silent ember-cli

COPY package*.json ./
RUN npm ci --silent

COPY . .

RUN ember build -prod


# RUN
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

