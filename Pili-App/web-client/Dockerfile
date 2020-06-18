FROM node:13.12.0-alpine
RUN mkdir -p /app
WORKDIR '/app'
#ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
RUN npm install
#RUN npm install react-scripts@3.4.1 -g
#RUN npm audit fix
COPY . /app
EXPOSE 3000

CMD ["npm","start"]
#CMD ["npm","run","dev"]