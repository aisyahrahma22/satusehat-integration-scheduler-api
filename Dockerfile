FROM node:14.17.5
WORKDIR /usr/src/core-scheduler-api
COPY ./ ./
RUN npm install --silent
EXPOSE 3006
CMD ["npm", "start"]

#docker build -t core-scheduler-api .
#docker run -p 3006:3006 -it --name core-scheduler-api --mount target=/usr/src/core-scheduler-api core-scheduler-api

