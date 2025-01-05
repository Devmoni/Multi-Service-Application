FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

RUN npm prune --production

EXPOSE 3000

ENV NODE_ENV=production
ENV JWT_SECRET=your_jwt_secret_key
ENV DATABASE_URL=postgres://your_username:your_password@postgres:5432/yourdb

CMD ["npm", "start"]
