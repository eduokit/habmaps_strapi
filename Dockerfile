FROM strapi/base:14

WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY backend .
ENV NODE_ENV production

RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]