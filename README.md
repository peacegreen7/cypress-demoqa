# Cypress DEMOQA project

> What I learn from this project
> 1. 
> 2.
> 3.
> 4. 

## Features

## Technology

## Project Architecture

## Getting Started

## Prerequisites
> This project requires Node.js to be installed on your machine.

## Installation

### 1. Setup Project
Step 1: Create a folder and Generate ```package.json```

Step 2: Install Cypress via npm:
```sh
$ cd /your/project/path

$ npm install cypress --save-dev 
 ```

Step 3: Install Cucumber

```sh
$ npm install --save-dev cypress-cucumber-preprocessor
```

Step 4: Add below code snippet in ```"cypress.config.js"```

```ts
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
```


Step 5: Add below code snippet in ```"package.json"```

```js
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "step_definitions": "cypress/e2e/cucumber/Tests"
 }
```


Step 6: Add the below line in ```"cypress.config.js"``` to run ```"*.feature"``` file

```js
specPattern: "**/*.feature",
```

## Run the app
Open the Cypress test runner with the following command
```sh
$ npm run test
```

## Test Scenario

## Test Report

## Generate user data
```sh
$ cd /cypress/fixtures

$ python3 generateUser.py 
```


