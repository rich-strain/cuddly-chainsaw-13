const express = require('express'); // Import the express package
const routes = require('./routes'); // Import the routes folder

const sequalize = require('./config/connection'); // Import the connection to the database

const app = express(); // Create the express app
const PORT = process.env.PORT || 3001; // Define the port

app.use(express.json()); // Define the middleware
app.use(express.urlencoded({ extended: true })); // Define the middleware

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
