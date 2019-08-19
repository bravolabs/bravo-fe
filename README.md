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

## Workflow

- **Adding a New Feature**
  - Create Component
  - Define Route
  - Create Action
  - Create Reducer
  - Add Reducer to Route Reducer
  - Create Test Suite for Feature

- **Create Pull Request**
  - The PR title should concisely explain the change or addition and the description should clearly state what the PR is about in detail.

- **Request a Review** from at least one team member.

- **All CI status checks should be green**
- **Review approval should have been submitted before merging**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

