FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm i -g netlify-cli

COPY . .

CMD ["netlify","deploy", "--build"]
