# Step 0 - Create APP
  yarn create react-app

# Step 1 - Install libs

```
  yarn add firebase@^7.15.5
  yarn add node-sass@^4.14.1
  yarn add react-loading@^2.0.3
  yarn add react-redux@^7.2.0
  yarn add react-router-dom@^5.2.0

  yarn add redux@^4.0.5
  yarn add redux-persist@^6.0.0
  yarn add redux-thunk@^2.3.0
```

# Step 2 - Install dev dependencies

```
  yarn add --dev babel-eslint@10.1.0
  yarn add --dev enzyme@3.11.0
  yarn add --dev enzyme-adapter-react-16@1.15.2
  yarn add --dev enzyme-to-json@3.5.0
  yarn add --dev eslint@6.6.0
  yarn add --dev eslint-plugin-jest@23.17.1
  yarn add --dev eslint-plugin-react@7.20.3
  yarn add --dev react-test-renderer@16.13.1
```

# Step 3 - Configure eslint
  Add the eslintrc.json to your project

# Step 4 - Configure the env variable
  create an .env following .env.sample

# Step 5 - Configure the tests setups
  configure your src/setupTests.js according our example.

# Step 6 - Create the assets folders
  copy src/assets

# Step 7 - Configure the routes
  lets use the react-router to configure the admin; home and signup routes

# Step 8 - Add redux store
  lets make the store available to the application.
  The store will store the user personal data
  The store will have 4 actions: GET_PROPERTIES, LOGIN, LOGOUT, SAVE_PROPERTY

# Step 9 - Configure and Add scss to out application
  Create the styles folder and import the foundation to the App.js


# Step 10 - Add home component
