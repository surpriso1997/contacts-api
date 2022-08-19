
FROM  public.ecr.aws/docker/library/node:16-alpine3.14 AS development

WORKDIR /usr/src/app


COPY package*.json ./
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

CMD ["node", "dist/main"]
