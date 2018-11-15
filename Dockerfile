FROM node:9.9.0
RUN npm config set registry https://registry.npm.taobao.org
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run init1
RUN npm run init2
RUN npm run init3
RUN npm run build
ENV TEST_ROOT /app
ENV PORT 80
EXPOSE 80
CMD npm start
