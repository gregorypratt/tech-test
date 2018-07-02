# Sky Betting & Gaming Tech Test Submission

## Technology Choices

#### [Creat React App](https://github.com/facebook/create-react-app)

I decided to use `create-react-app` to get started with little to no config as it comes with Webpack, Babel, ESLint, Jest etc. all baked in so I could concentrate on the development of features.

#### [Redux](https://redux.js.org/)

I chose Redux to handle the application state as A) I am familiar with it and B) thought it was best suited for the task at hand given the app has to manage a decent amount of data.

#### [BlazeUI](https://github.com/BlazeUI/blaze)

Rather than write all the CSS from scratch I decided to utilise a pre-existing front end toolkit.

#### [Enzyme](http://airbnb.io/enzyme/)

To make component testing a little rhobust I'm using snapshot testing from Enzyme.

## Getting Started

### Starting the APIs

Open a new terminal window, navigate to this project directory and execute:

```
docker-compose up
```

This will start the Sky Betting mock API servers.

### Starting the UI

Once the APIs are running open another new terminal and type in the following

```
cd tech-test
yarn
yarn start
```

This will install the dependencies and start the web app and should open the browser automatically.

### To run the unit tests

```
yarn test
```

### Completed features
- Load live events
- Toggle win-draw-win markets
- Toggle Price formats
- Open specific event to see all markets
- Lazy load outcomes for each market as user scrolls down the page
- _Some_ unit tests
- Connected to the web socket (ran out of time to use it to update the UI)
