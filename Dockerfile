FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY netlify.toml ./
COPY tsconfig.json ./
COPY .eslintrc.json ./
COPY next.config.js ./
COPY next-env.d.ts ./

RUN npm i -E
RUN npm i -g netlify-cli


CMD ["npm","run","dev"]
