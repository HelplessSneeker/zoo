
# Project Title

A brief description of what this project does and who it's for


## Run With Docker

To build and start the application using docker simply go into the Directory and run

```bash
  docker-compose up --build
```


## Run Frontend Locally

Go in to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Run Backend Locally

Go in to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Install prisma

```bash
  npm install prisma --save-dev
```

Generate the prisma client

```bash
  npx prisma generate
```

Generate the prisma schema on the database

```bash
  npx prisma migrate deploy
```

Start the server

```bash
  npm run start
```