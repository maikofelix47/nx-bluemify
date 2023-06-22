# Bluemify

This is an Nx monorepo containing the following

1. React Front End.
2. NestJs Backend.

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

## React Front End

To start the react project run `nx serve front-end` and navigate to `http://localhost:4200/`.

To add a new component run `nx g @nx/react:component <component-name> --project=front-end` or you can create the component manually.

## NestJs Backend

To start the NestJs service run `nx serve back-end`. It should serve `http://localhost:3000/api`.

To generate a module `nx g @nx/nest:module <module-name> --project=back-end`.

To generate a controller `nx g @nx/nest:controller <controller-name> --project=back-end`.

To generate a service `nx g @nx/nest:service <service-name> --project=back-end`.

## Testing

To run front-end tests run `npm run test:fe`.
To run back-end tests run `npm run test:be`.

## Build

To build front-end run `npm run build-prod:fe`.
To build back-end run `npm run build-prod:be`.
To build both front-end and backend run `npm run build-prod:all`
