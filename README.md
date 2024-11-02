<a id="about"> </a>

# PostIt-Web App

Welcome to PostIt, the platform designed for effortless and engaging conversations. Connect with friends, family, and new acquaintances in real-time using our user-friendly interface. PostIt allows users to create accounts, form groups, and add registered members to these groups. One person can then send notifications to everyone in the group with a single message. Enjoy seamless communication in a secure and vibrant environment, express yourself freely, and build meaningful connections with ease.

<!-- - <a href="https://PostIt-Samuel-Othieno.vercel.app/" target="_blank">Demo</a> -->

- [About Project](#about)

- [Features and Interfaces](#features)

  - [Home](#home)
  - [Login and Authentication](#auth)
  - [Chats](#chats)
  - [Messages](#messages)
  - [Groups](#group)
  - [Search](#search)
  - [Settings](#settings)

- [Tech Stack](#tech-stack)

  - [Front-end](#frontend)
  - [Backend](#backend)
  - [Other Tools](#other)

- [Getting Started Instructions](#instructions)
- [Links](#links)
- [Contact](#contact)

  <a id="features"> </a>

## Features and Interfaces

1. Home Page <a id="home"> </a>

   - [Landing Page](#home) which lists all the features of the app
<br/>

2. Login/Signup Page (Authentication) <a id="auth"> </a>

   - Fast and secure authentication
   - JWT tokens used to persist the authentication state
   - Enable swift and secure access with Google Sign-In/Login, seamlessly authenticating users using their Google credentials
     <br/>

3. Chats <a id="chats"> </a>

   - Conversation History: View a comprehensive list of all your past chats, including details about whom you've chatted with and the timestamps of each conversation.

   - One-Click Conversations: Initiate conversations effortlessly by simply clicking on any chat thread from the list, allowing instant connection and seamless interaction.
     <br/>

4. Messages <a id="messages"> </a>

   - Effortless Chatting: Easily communicate with others through Socket.IO's seamless functionality.

   - Voice-Based Input: Enjoy hassle-free messaging with voice-based text input capabilities.

   - Typing Indicator: Stay informed with a typing indicator that signals whether the other person is currently typing.

<br/>
5. Groups <a id="group"> </a>

- Group Creation: Effortlessly create group chats with the people you need.

- Admin Control: Admin privileges allow for group updates, including changing the group's name or managing user additions and deletions.
<br/> 
6. Search <a id="search"> </a>

- Robust Search Functionality: Powerful search feature to easily find people within the application.

- Selection Capability: Select individuals from the search results to initiate conversations seamlessly.

<br/> 7. Settings <a id="settings"> </a>

- Credential Updates: Easily modify your credentials such as email, name like information.

- Profile Picture Upload: Upload your profile picture to personalize your account within the application.

<br/>

<!-- # Demo

The illustration above showcases a conversation between two separate tabs opened in Chrome, simulating two seperate accounts chatting with each other. It demonstrates the transmission of messages along with the typing effect." -->

# Tech stack

<a id="frontend"> </a>

#### Frontend

- ReactJS
- Javascript
- Redux
- MaterialUI
- TailWindCSS

<a id="backend"> </a>

#### Backend

- Nodejs
- Express
- Prisma

| Frontend                                  | Backend                            |
|:------------------------------------------|:-----------------------------------|
| React                                     | Node.js                            |
| Redux                                     | Express.js                         |
| Redux Toolkit                             | PostgreSQL                         |
| React-Redux                               | Prisma                             |
| Axios                                     | JOI                                |
| Vite                                      | Bcrypt                             |
| Material Design for Bootstrap (MDB)       | HTTP Status Codes                  |
| SCSS                                      | DOTENV                             |
| Webpack                                   | CORS                               |
| Babel                                     | JSON Web Token                     |
| Tailwind                                  | Nodemon                            |
| Mantine                                   | Express-validator                  |


<a id="other"> </a>

#### Other Tools

- Socket IO
- NPM Packages

<a id="instructions"> </a>

## Instructions

1. Clone the project:

   - Firstly, clone the project using the command: https://github.com/Samuel-Othieno/PostIt

2. Install Packages:

   - Install the required packages by navigating to the backend directory: `cd backend` and then run `npm install`.
   - Similarly, move to the frontend directory: `cd frontend` and execute `npm install`.

3. To set up the frontend

   - Create a `.env` file in the frontend directory.

   - Add the following values to the `.env` file:
   - ```
     REACT_APP_API_URL=http://127.0.0.1:4000
     REACT_APP_SOCKET_URL=http://127.0.0.1:4000
     ```

4. For configuring the backend:

   - Establish your applications connection with MongoDB using following environment variables as key with your own values.
   - Create a `config.env` file in the backend directory.
   - Set the following environment variables in the `config.env` file:

   ```
     DBPASSWORD=<-yourmongodbpassword->
     DB=<-yourmongodbconnectionuri->
     PORT=4000
     DOMAIN=127.0.0.1
     JWTEXPIRES=90d
     JWTSECRET=<-giveanysecretkey->
     JWT_COOKIE_EXPIRES=90
   ```

5. Start Backend Server:

   - Start the backend server using the command: `cd backend` and then `npm start`.

6. Start Frontend:

   - Finally, initiate the frontend with the command: `cd frontend` and then `npm start`.

7. Open `http://localhost:3000` with your browser to see the app





<a id="links"> </a>

## Useful Links

<!-- - [Project Demo](https://PostIt-Samuel-Othieno.vercel.app/) -->
- [Project Demo](#)

<a id="contact"> </a>

## Need help?

Feel free to contact me on [X](https://x.com/douglasothieno?s=09) or [LinkedIn](https://www.linkedin.com/in/samuel-douglas-othieno-80484628a/), know more about me @[SamuelOthieno.vercel.app](https://samuelothieno.vercel.app/)


[![x](https://img.shields.io/badge/follow-black.svg?logo=X&logoColor=white)](https://x.com/douglasothieno?s=09)
