FROM node:14

WORKDIR /var/www/html

EXPOSE 8080

RUN yarn install

CMD [ "yarn", "serve" ]