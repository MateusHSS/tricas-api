FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

ENV NODE_ENV=development
ENV DB_HOST=host.docker.internal
ENV DB_PORT=3306
ENV DB_USER=tricas-api-docker
ENV DB_PASS=senhadocker
ENV DB_NAME=tricas

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/src/main"]

