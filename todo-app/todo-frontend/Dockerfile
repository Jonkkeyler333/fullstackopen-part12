FROM node:24-alpine AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=/api

RUN npm run test

RUN npm run build

FROM nginx:1.31.8-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html