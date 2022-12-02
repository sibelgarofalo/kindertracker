# Stage 0, "build-stage"
FROM node:lts-slim
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
CMD ["npm", "start"]