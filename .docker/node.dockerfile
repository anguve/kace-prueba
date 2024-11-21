FROM node:lts-alpine as base 

RUN corepack enable
RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

COPY pnpm-lock.* ./

FROM base as dev

RUN pnpm install

CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]

# FROM base as prod 

# COPY --from=dev /app/node_modules ./node_modules

# RUN pnpm build

# CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4173"]