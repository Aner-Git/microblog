# Yarn comes bundled with the official node docker image. Nice.
FROM node:16-stretch-slim as local


# Configure working dir
RUN mkdir /webapp
VOLUME ["/webapp"]
WORKDIR /webapp

CMD ["yarn", "start"]

