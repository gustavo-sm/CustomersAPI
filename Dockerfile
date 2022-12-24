FROM node:latest
ENV EXPOSE_PORT=${APP_PORT}
WORKDIR /CustomersAPI
COPY . .
RUN chown -R node:node /CustomersAPI
RUN npm install && npm install typescript -g

USER node
EXPOSE ${EXPOSE_PORT}
CMD ["npm", "start"]