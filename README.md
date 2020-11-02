<h1 align="center">
  <img src="./.github/logo.svg" alt="Happy" title="Happy" />
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=00C7C7&label=created%20at&message=Jun%202020" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/happy?label=updated%20at&labelColor=000000&color=00C7C7" alt="Update Date" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=00C7C7&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/happy?labelColor=000000&color=00C7C7" alt="Project License" />
</p>

<br />
<p align="center">
  <img src="./.github/overview.png" alt="Application Overview" width="100%">
</p>
<br />

Application developed during the third edition of [Next Level Week](https://nextlevelweek.com/), promoted by [RocketSeat](https://rocketseat.com.br/). The objective was to build a multi-platform application to connect orphanages and people that want to find them, get in toudh and schedule a visit. The event chose the JavaScript stack to be used all over the implementation, using **React** in web version, **React Native** in mobile and **Node.js** at the server side.

[Check out the application running!](https://happy-app-nlw.herokuapp.com/)

## :trophy: Lessons Learned

- Building a full scalable *React* application;
- Using TypeScript in a *React* app and at the backend to help on development;
- React Hooks! The fun way to build *React* apps;
- Using *Leaflet* for *React*, an easy map component;
- Building an app with *React Native* and *Expo* framework;
- Building a scalable backend application with *Express* and *SQLite*;
- Uploading images to the server and previewing them instantly;
- Using *TypeORM* to help on migrations and database transactions;
- Using *Yup* to easily validate data from the client;
- Catching requests processing errors and displaying them;

## :rocket: Technologies & Resources

**Frontend (Web):**
- [React.js](https://reactjs.org)
- [Axios](https://github.com/axios/axios) (HTTP client)
- [React Leaflet](https://react-leaflet.js.org/) (Map component)

**Mobile:**
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios) (HTTP client)

**Backend:**
- [Node.js](https://nodejs.org/en/)
- [SQLite 3](https://www.sqlite.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://github.com/jquense/yup) (validation module)

**Development:**
- TypeScript
- [Insomnia](https://insomnia.rest/) (REST client)
- [BeeKeeper Studio](https://www.beekeeperstudio.io/) (database manager)
- [Visual Studio Code](https://code.visualstudio.com/)
- Node.js routines with NPM

## :hammer: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its `node` and `npm` shortcuts available through the command line, then use the following routines to run each part of the project:

```bash
  # at project root (optional)
$ npm install          # install required dependencies
$ node config.js       # Creates ".env*" files and configure local network URL to be used

  # Server
$ cd server
$ npm install          # install required dependencies
$ npm run migrate      # setup database schema
$ npm start            # start development Server
$ npm run build        # transpile source files for deployment

  # Web App
$ cd web
$ npm install          # install required dependencies
$ npm start            # start development server
$ npm run build        # build files for production

  # Mobile App
$ cd mobile
$ npm install          # install required dependencies
$ npm start            # build and serve the application via Expo mobile app
```

## :zap: Features Implementations

The main idea of the project was developed during the week of the event and the result is the one found in [release v1.0](https://github.com/juliolmuller/happy/releases/tag/v1.0). Afterwards, any incoming commits are intended to be incremental updates to improve the application, as proposed at the end of the event.

Besides, both v1.0 and v2.0 have their layouts available at **[Figma](http://figma.com/)**.

### Version 1.0

- [Web Layout](https://www.figma.com/file/7gSVTCjs7Qy61IBwsR4KHr/Happy-1.0-web)
- [Mobile Layout](https://www.figma.com/file/UIBJ2XzSdPCXDNj2SEh4ay/Happy-1.0-mobile)

- Web
  - [x] Start up project using `create-react-app` and TypeScript;
  - [x] Create landing page;
  - [x] Define routes and navigation rules;
  - [x] Create page with navigable map and pins;
  - [x] Fetch orphanages from REST API and position on the map;
  - [x] Create form to display selected orphanage details;
  - [x] Create form to register new orphanages;
- Mobile
  - [x] Start up project using **Expo Framework** and TypeScript;
  - [x] Create landing page screen;
  - [x] Define navigation mechanisms;
  - [x] Create screen to display saved orphanages;
  - [x] Create screen to register new orphanages;
  - [x] Create photos carrousel;
- Server
  - [x] Create project with *Express*, *SQLite3* and *TypeORM*;
  - [x] COnfigure *TypeORM* entities and migrations;
  - [x] Create REST API to retrieve and store data;
  - [x] Process uploaded photos and store them in a separate directory;
  - [x] Validate submitted form;

### Version 2.0

- [Challenge](https://www.notion.so/Vers-o-2-0-do-Happy-c754db7a4d41469e8c2d00fcf75392c4)
- [Web Layout](https://www.figma.com/file/QyESLzeeMDMhf5uuyP7R1y/Happy-2.0-web)
- [Mobile Layout](https://www.figma.com/file/GGmlRrNAbBPrNbEmJFvv4c/Happy-2.0-mobile)

- Web
  - [x] Set up linting tools;
  - [x] Upgrade to React 17;
  - [ ] Allow append and delete of photos on orphanage form;
  - [ ] Add loading animations;
  - [ ] Track user geo-location;
  - [ ] Add other orphanage information: address and phone number;
  - [ ] Create search mechanism at the map page;
  - [ ] Do not allow real-time display new orphanage. Await service review;
  - [ ] Create form for logging into the service;
  - [ ] Create form for signing up to the service;
  - [ ] Create form for retrieving account access;
  - [ ] Implement 2-factor authentication;
  - [ ] Create page to display current user data;
  - [ ] Create form to update current user profile;
  - [ ] Create form to update existing orphanage;
  - [ ] Catch forms validation and display notification;
  - [ ] Handle other HTTP calls errors;
  - [ ] Automated tests (unit and E2E);
- Mobile
  - [x] Set up linting tools;
  - [x] Upgrade to React 17;
  - [x] Make use of environment variables for development;
  - [x] Add splash screen;
  - [ ] Add onboarding screens;
  - [ ] Add loading animations;
  - [ ] Track user geo-location;
  - [ ] Add other orphanage information: address and phone number;
  - [ ] Create search mechanism at the map page;
  - [ ] Create form for logging into the service;
  - [ ] Create form for signing up to the service;
  - [ ] Implement 2-factor authentication;
  - [ ] Create page to display current user profile;
  - [ ] Create form to update current user profile;
  - [ ] Create form to update existing orphanage;
  - [ ] Catch forms validation and display notification;
  - [ ] Handle other HTTP calls errors;
  - [ ] Automated tests (unit and E2E);
- Server
  - [x] Set up linting tools;
  - [x] Escape uploaded photos names;
  - [x] Make use of environment variables;
  - [ ] Photos count upload validation;
  - [ ] Create authentication system;
  - [ ] Automated tests;
  - [ ] Deploy the application;

---

Also checkout the project developed in [NLW #2](https://github.com/juliolmuller/proffy)
