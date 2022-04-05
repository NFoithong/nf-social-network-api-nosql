# nf-social-network-api-nosql
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use ```Express.js``` for routing, a ```MongoDB database```, and the ```Mongoose ODM```. In addition to using the Express.js (Links to an external site.) and Mongoose (Links to an external site.) packages, you may 

## Table of Contents

  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Mockup](#mockup)
  - [Usage](#usage)
  - [Questions](#questions)

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Technologies
JavaScript, Node.js, Express.js, NoSQL(mongoDB and mongoose), Insomnia 

## Installation
- Clone GitHub repository
- npm init
- Ensure that MongoDB and Express are installed on your computer.
- Invoke application using npm start.

## Mock-Up
The following animations show examples of the application's API routes being tested in Insomnia.

- Animation shows GET routes to return all users and all thoughts being tested in Insomnia:

- Animation shows GET routes to return a single user and a single thought being tested in Insomnia:

- Animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

Walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

- Animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

Walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

[Video Demo](https://user-images.githubusercontent.com/69065671/161667911-e8c2e066-cbc6-44af-93ee-231c2e7942af.mov)

## Questions
Please contact me at [Email](n.foithong1983@gmail.com) with any further questions. <br> [Github link](https://github.com/NFoithong)
