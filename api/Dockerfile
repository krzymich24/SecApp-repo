FROM node:18-alpine
WORKDIR /app
RUN npm i -g ts-node typescript @types/node
COPY package.json .
RUN yarn
COPY . ./
CMD npm start
