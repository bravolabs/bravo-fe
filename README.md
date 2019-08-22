# Bravo Frontend

Healthy office cultures often acknowledge good work from their coworkers and peers. Award your peers with acknowledgements that act like coins/points in Slack when they do awesome things - and never let the acknowledgement of their good work get lost in the shuffle again.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For development, you will only need Node.js installed on your environment.

    $ node --version
    v10.16.0

    $ npm --version
    6.10.3

### Installing

    $ https://github.com/bravolabs/bravo-fe.git
    $ cd bravo-fe
    $ npm install

### Starting Development Server

    $ npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

### Running the tests

    $ npm test

Launches the test runner in the interactive watch mode.

### Deployment / Build For Production

    $ npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Structure and Naming

```
  src
  |
  ├── actions
  |   ├── user.js
  |   └── home.js
  |
  ├── components
  |   ├── Home
  |   |   ├── index.js
  |   |   ├── home.styles.js
  |   |   └── home.test.js
  |   |
  |   └── User
  |       ├── index.js
  |       ├── user.styles.js
  |       └── user.test.js
  |
  ├── reducers
  |   ├── index.js
  |   └── userReducer.js

```

### Setup formatting on Editor

On VsCode:

- Go to `Settings` > `Text Editor` > `Formatting`
- Check `Format on Save`

Example:
![Format on save](https://res.cloudinary.com/elbon/image/upload/v1566300863/Screenshot_2019-08-20_at_12.31.41_PM.png)

## Workflow

- **Create new `feature-branch` from `develop` branch that describes your work.**

  ```bash
    git checkout -b project-setup
  ```

Example:
![Create a New Branch](https://res.cloudinary.com/elbon/image/upload/v1566291009/branch-naming.png)

- **Adding a New Feature**

  - Create Component named `index.js` related folder.

    ```js
    // src/Home/index.js
    const Home = () => <h1>Welcome to BravoFE</h1>;

    export default Home;
    ```

  - Define Route

    ```js
    // src/routes/AppRouter.js
    import Home from '../components/Home';

    ...
    <Route exact path="/" component={Home} />;
    ```

  - Create Action

    ```js
    // src/actions/home.js
    export const GET_HOME = 'GET_HOME';

    export const getHome = user => {
      return { type: GET_HOME, payload: user };
    };
    ```

  - Create Reducer

    ```js
    // src/reducers/homeReducer.js
    import { GET_HOME } from '../actions/home.js';

    const homeReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_HOME:
          return { ...state, home: action.payload };
        default:
          return state;
      }
    };

    export default homeReducer;
    ```

  - Add Reducer to root reducer

    ```js
    // src/reducers/index.js
    import homeReducer from '../homeReducer.js';

    const rootReducer = combineReducers({
      home: homeReducer,
    });

    export default rootReducer;
    ```

  - Create Test Suite for Feature

    ```js
    // src/Home/home.test.js
    import Home from './index.js';

    describe('Home', () => {
      it('snapshot renders', () => {
        const component = renderer.create(<Home />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    ```

- **Create Pull Request**

  - The PR title should concisely explain the change or addition.
    Example:
    ![Create a new PR](https://res.cloudinary.com/elbon/image/upload/v1566290222/PR%20Title.png)

  - The PR description should clearly state what the PR is about in detail.

- **Request a Review** from at least one team member.
  Example:
  ![Request team member to review PR](https://res.cloudinary.com/elbon/image/upload/v1566290612/Description%20and%20reviewer.png)

- **Resolve Requested Changes**
  Example:
  ![Resolve Changes](https://res.cloudinary.com/elbon/image/upload/v1566295161/resolve-conversation.png)

* **All CI status checks should be green**

* **Review approval should have been submitted before merging**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
