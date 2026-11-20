FROM node:24-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"]