# Spa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Despliegue de aplicación en gh-pages

1. npm install -g angular-cli-ghpages
2. npm i angular-cli-ghpages --save-dev
3. ng build --prod --base-href "https://lizethpatino.github.io/HeroesApp/"
4. npx angular-cli-ghpages --dir=dist/spa
