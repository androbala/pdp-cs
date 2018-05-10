## TODO
Should hot reload on dev. build workflow should be modified..


## PDP CS  (Product Display Page Case Study for Target)

### Tech Stack

Front-end is built using React.
Backend is built using Express (Node).
Babel/Webpack is used for transpiling and bundling the client application.

### Installing Packages

 - `npm install`

### Building application

 - Build the optimized project using `npm run build`

### Running Application

 - `npm start`

 -  Vist "localhost:8080" in browser to view the application

### Testing Application

 - `npm run test`

Note: jest-cli needs may need to installed globally in some machines. (npm install -g jest-cli)

 ### Development Environment
 
 This application is developed in the below Environment
  - node - v6.11.1
  - npm - v5.5.1

Project Structure
```+--client/ - Client side React application    
 |-- actions/
 |-- components/
 |-- container/
 |-- reducers/
 |-- utils/
 |-- index.js
 |-- index.test.js
+-- server/ - Server side Express/Node application
 |-- routes.js - Routes to serve client application and API methods
 |-- server.js - Launches express web server
|-- .babel.rc
|-- app.js
|-- db.json - JSON to store notes data managed by lowdb
|-- index.css
|-- index.html
|-- package.json - npm dependencies for both client and server application.
|-- webpack.config.js```
