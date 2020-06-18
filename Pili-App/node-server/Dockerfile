FROM node:latest
RUN mkdir -p /app
WORKDIR '/app'

COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 80

CMD ["npm","start"]
#CMD ["nodemon", "index.js"]
#CMD ["npm","run","dev"]