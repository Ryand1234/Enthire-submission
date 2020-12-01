# Enthire-submission
## File Structure
- client
	- This folder contains client code
- lib
	- This folder contains passport config declaration file. Google Strategy was declared in this file.
- middleware
	- This folder contains middleware that are used to verify user authentication.
- routes
	- This folder contain file containing routes logic.
- utils
	- This folder contain mySql database connection file.

## Dependencies
Axios: To make API calls to backend

Bulma: For CSS

## How to run this project
- execute `npm install` to download all dependecies
- replace .env.example with .env and fill all the credentials
- run `node server.js` to start backend server.
- on another server enter into client folder and execute `npm run serve` to start client server

## Note
Client server is assumed to be running at PORT 8081 and Backend server at PORT 3000.
