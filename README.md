# BaseballFan Reference 

BaseballFan Reference is a place for baseball fans to track their own history. Many websites exist for player and team statistics, but never has a website existed for fan statistics. Users can now keep track of all the games they attend as well as the result and other information for each individual game. 

## Installation 

To get started, type this command into the terminal: 
	npm run start 

## Setup 

To run the client server, type this command into the terminal: 
	npm run dev 

Follow the link below to test out the server: 
http://localhost:5173/ 

To run the backend server, type this command into the terminal: 
	rails server 

Follow the link below to test out the server: 
	http://localhost:3000/games 

## Functionality 

Users can begin by signing up. The account is created through a post request, so the information entered (name, username, email, etc.) is sent to the backend. Once a user logs in, they can then add a new game to their profile. This is done by filling out the “add game” form, which when submitted is sent to the backend via a post request. Then game data entered is then displayed on the user’s profile page via a get request from the ‘games’ array in the backend and mapping each item of the array within the ‘game’ div. Users can also delete a game by clicking the ‘X’, button, which removes the game from the backend via a delete request. 
  