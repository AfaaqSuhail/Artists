### App URL
https://artists-demo.herokuapp.com/
### Artists
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
### Computer Set Up

- Install Node.js (*version 14.17.1) & NPM
    - We recommend using NVM (Node Version Manager)
        - <https://github.com/creationix/nvm> (OSX)
        - <https://github.com/coreybutler/nvm-windows> (Windows)
- Install Git
    - From Github Desktop app: <https://desktop.github.com/>
    - Or from Xcode dev tools
    - Or from Git website: <https://git-scm.com/downloads>
    - Or from wherever you prefer
### Artists Repository Setup

1. Clone repo from Github
    - Artists (this repo)
2. Install other **NPM** dependencies in the repository
	- In **Artists** 
	  - `npm install`
3. Then start the project in **Artists**
	- On the root level to start both Frontend and Backend
	    - `npm run start`
    - On the root level to start Frontend and Backend individually, run these commands respectively
        - `ng serve --open`
        - `node server.js`
4. Go to `localhost:4200` in your browser to navigate to the main Artists page
### Stack

#### Backend

- API
  - NodeJS
  - Express

#### Frontend

- Landing
  - Angular
  - Angular Material UI

- Web
  - Angular
  - Angular Routing
  - Angular Material UI

#### Deployment

- Technologies
  - Heroku

### Salient Features Used in App

#### Backend

1. Why Node as middleware ? 
    - I was getting CORS issues while hitting from the browser so I implemented express server for server to server implementation so that I don't get any CORS issues.

#### Frontend

1. Debounce usage on Frontend
    - To restrict frequent api calls on input type for search.
    - To performance of the webpage

2.  State saved in the url
    - On return back to Artists page system should have a artist detail so that it can fetch latest result.

