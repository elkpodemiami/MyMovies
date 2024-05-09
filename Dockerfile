FROM node:20

WORKDIR /app

COPY package*.json ./
COPY public/ /app/public
COPY src/ /app/src

RUN npm install

CMD ["npm", "start"]
