FROM node:14

WORKDIR /src

EXPOSE 8080

RUN yarn install

CMD [ "yarn", "serve" ]