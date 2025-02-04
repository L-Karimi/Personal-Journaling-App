# Author

Lucy Wangechi Karimi

# Personal Journaling App

#### Description.

This project involves developing a personal journaling application using React Native for the mobile app and Node.js with MySQL for the backend service. Users can authenticate, manage journal entries, categorize them, and view summaries over different periods.

## Setup/Installation Requirements

# 1 Clone the Repository

- git clone https://github.com/L-Karimi/Personal-Journaling-App.git
- cd Personal Journaling App/Frontend/JournalApp

- Install Dependencies

- npm install
- Run the Mobile App

For Expo:
- npx expo start

- npx react-native run-android

Backend Service
- Clone the Repository

# 2 Backend Service
- git clone https://github.com/L-Karimi/Personal-Journaling-App
- cd Personal-Journaling-App/Backend
- Install Dependencies

- npm install

# 3 Configure MySQL

- Ensure the MySQL server is running.
- Create a database and user with appropriate permissions.
- Update the configuration in config/config.json.

# 4 Run Migrations 
- npx sequelize-cli db:migrate

# 5 Start the Backend Server

- npm start
  
## API Documentation
### Authentication
- POST /register: Register a new user.
- POST /login: Authenticate a user and return a token.
### Journal Entries
- GET /entries: Fetch all journal entries for the authenticated user.
- POST /entries: Create a new journal entry.
### PUT /entries/
- : Update an existing journal entry.
### DELETE /entries/
- : Delete a journal entry.
### Summary
- GET /summary: Fetch a summary of journal entries over a specified period.
### Settings
- PUT /settings: Update user settings (username, password).

## Technologies Used

- React Native
- Node.js
- MySQL
- TypeScript 

## Support and contact details

- karimiluccy@gmail.com
- 0797916750

### License

licensed under [MIT license](LICENSE)
