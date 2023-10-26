FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY public /public
VOLUME ["/public"]

EXPOSE 8000
CMD [ "node", "server.js" ]
