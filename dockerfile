FROM node:12-alpine
# Or whatever Node version/image you want
COPY . /var/www
WORKDIR '/var/www'

RUN npm install -g nodemon

COPY package.json /var/www/package.json
RUN npm install
RUN mv /var/www/node_modules /node_modules

COPY . /var/www