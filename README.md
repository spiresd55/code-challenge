This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `Getting Started`

- Clone this repo
- run `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test-coverage`

Launches the test runner<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Tech Stack Used
- Typescript
- Material-UI : Allows for rapid prototyping
- Redux
- reselect
- redux-orm
- react
- react hooks over react lifecycle events
- redux-saga
- jest
- enzyme 

### Project Structure
- **/** : The root directory contains package.json file and compiler configurations for typescript
- **/src** : This directory contains all files that handles the bootstraping of the app and setting up the tests
- **/src/store** : This directory contains the AppStore.js file and sub state directories for the redux store
- **/src/store/UI**: Contains action creators and reducer for state related to page level state (such as show loader)
- **/src/store/Feed**: Contains action creators, action types, reducers, and sagas for Feed type actions
- **/src/store/model**: This directory sets up the redux-orm and contains a Model for both Post and Comments
- **/src/service**: This directory contains the FeedService which injests the Apis provided in the challenge
- **/src/view**: Contains the feed view and the components that make the feed work

### Other Notes
- I created Container files to set up HOC's across the app. I ignored files for testing that contained Container in its name.
- Comment.ts and Post.ts within the /src/store/model directory contain a reducer to handle creating posts and comments in the redux store and relating them to each other
- The async calls to the server happen with FeedSaga.js
- I used hooks instead of lifecycle events
- Generally I would have a /src/components directory. This would contain common components that can be used across the app. Also like setup storybooks for these reusable components. https://github.com/storybookjs/storybook
- I didn't get a chance to write the error handling for bad api calls. If I had more time I would have placed a try catch block within the saga, and dispatch an action creator on error. The error would displayed to the user as a notification banner on the top of the screen.
- I used material-ui to build this, so I could focus more at the task at hand.
- I would have made the createStyles css within each Component more modular if given more time.
- A note about how I like to test react components. If its a reusable component within /src/components, I would shallow render the component and write tests to test the individual functionality of the component. If the component is only displaying data to the user with absolutely 0 logic, i would use a snapshot. When I test views, I like the test the entire tree of that view. I will mock the store. All the other tests in the application are unit tested and mocked correctly. 
- This code has greater than 95% code coverage. 
- In the package.json file, I usually would have all the typings and testing libraries within the devDependencies.
