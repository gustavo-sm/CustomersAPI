FROM node:latest
ENV EXPOSE_PORT=${APP_PORT}
WORKDIR /usr/CustomersAPI
COPY . .
RUN npm install && npm install typescript -g

RUN tsc
EXPOSE ${EXPOSE_PORT}
CMD ["npm", "start"]