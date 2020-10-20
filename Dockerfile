FROM node:12.18.4

ENV NODE_ENV=production

COPY . /src

WORKDIR /src

RUN yarn install 

CMD [ "yarn", "start" ]