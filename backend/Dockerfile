FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install prisma --save-dev

COPY . .

ENV DATABASE_URL=postgres://user:root@db:5432/zoo

RUN npx prisma generate

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:migrate:prod"]