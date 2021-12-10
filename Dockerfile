FROM node:16-alpine3.11

RUN mkdir -p /serverapp

WORKDIR /serverapp

ADD . /serverapp

RUN yarn --ignore-engines && \
    yarn cache clean


EXPOSE 3000

CMD [ "yarn", , "run" ,"start" ]