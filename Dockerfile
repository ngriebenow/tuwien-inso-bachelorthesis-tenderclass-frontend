# For productive usage: Remove the lines after this comment blog, uncomment the code lines, build the Angular app and then use a nginx server
# FROM nginx:1.17.1-alpine
# COPY /dist/tenderclass-frontend /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# base image
FROM node

# set working directory
WORKDIR /app

# add `/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install -g @angular/cli@7.3.9
RUN npm install

# add app
COPY . /app

# start app
 CMD [ "ng", "serve", "--host", "0.0.0.0"]
