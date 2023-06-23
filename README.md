# Bluemify

This is an Nx monorepo containing the following

1. React Front End.
2. Express Backend.
3. PostgreSQL Database
4. Prisma ORM
5. Swagger API Docs

## Requirements

1. Node v16+.
2. NPM v8+.
3. Docker v20+.
4. Nx `npm install --global nx@latest`.
   `

## Set up

1. Fork the project.
2. Clone the project.
3. Navigate into the folder and run `npm install`.
4. Start the wordpress and its MySql instance run `docker compose up`.
5. Creat a .env file in the project root folder with the following

```
DATABASE_URL="postgresql://postgres:<user>@localhost:<port>/<database>?schema=<schema>"

```

6. Install a PostgreSQL instance. You can set up a docker instance by running
   `docker run --name <name> -p 0.0.0.0:5432:5432 -p 5432:5432 -e POSTGRES_PASSWORD=<password>  -d postgres`

7. Run migrations `npx prisma migrate dev`

## React Front End

To start the react project run `nx serve front-end` and navigate to `http://localhost:4200/`.

To add a new component run `nx g @nx/react:component <component-name> --project=front-end` or you can create the component manually.

## Express Backend

To start the Express service run `nx serve back-end`. It should serve `http://localhost:3000/api`.

## Testing

To run front-end tests run `npm run test:fe`.
To run back-end tests run `npm run test:be`.

## Build

To build front-end run `npm run build-prod:fe`.
To build back-end run `npm run build-prod:be`.
To build both front-end and backend run `npm run build-prod:all`.

# API Docs

To access API Docs navigate to `http://localhost:3000/api-docs/`
