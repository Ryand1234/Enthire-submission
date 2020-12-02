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

## How to create Google API
- Visit Google console
- Open the Google API Console Credentials page.
- Click Select a project, then NEW PROJECT, and enter a name for the project, and optionally, edit the provided project ID. 
- Click Create.
- On the Credentials page, select Create credentials, then OAuth client ID.
- You may be prompted to set a product name on the Consent screen; if so, click Configure consent screen, supply the requested information, and click Save to return to the Credentials screen.
- Select Web Application for the Application Type. Follow the instructions to enter JavaScript origins, redirect URIs(http://localhost:8081, or both.
- Click Create.
- Copy those credentials to .env file
- if have trouble please visit this page [here](https://developers.google.com/adwords/api/docs/guides/authentication#webapp)

## How to run this project
- execute `npm install` to download all dependecies
- replace .env.example with .env and fill all the credentials
- run `node server.js` to start backend server.
- on another server enter into client folder and execute `npm run serve` to start client server

## Note
Client server is assumed to be running at PORT 8081 and Backend server at PORT 3000.
