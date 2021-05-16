FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
EXPOSE 8092
CMD ["node", "server.js"]