FROM node:lts
# Or whatever Node version/image you want
WORKDIR '/var/www/app'

RUN npm install -g nodemon

COPY package.json /var/www/app/package.json
RUN npm install && npm ls
RUN mv /var/www/app/node_modules /node_modules

COPY . /var/www/app