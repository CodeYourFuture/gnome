FROM node:argon-alpine

MAINTAINER Jonathan Tavares <jonathan@impossible.com>

COPY ./package.json /usr/src/api/package.json
WORKDIR /usr/src/api
RUN apk --no-cache --update add --virtual build-dependencies build-base python \
  && apk --update add curl \
  && npm config set loglevel warn \
  && npm --quiet install \
  && npm cache clean \
  && apk del build-dependencies \
  && adduser -D humankind \
  && chown -R humankind /usr/src/api

USER humankind

ENV NODE_PATH src

ENV GNOME_PORT 3000

COPY . /usr/src/api

EXPOSE $GNOME_PORT

CMD [ "npm", "start" ]
