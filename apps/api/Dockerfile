FROM node:16.16.0-bullseye as install

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

FROM install as build

COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY src ./src

RUN yarn build

FROM node:16.16.0-bullseye as production-build

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./

COPY --from=build /usr/src/app/dist /usr/src/app/dist

RUN yarn install --frozen-lockfile && yarn cache clean

EXPOSE 3000
