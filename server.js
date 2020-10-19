// "use strict";;

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/environment");
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
// Setup server
const app = express();
const server = require("http").createServer(app);

var Sequelize = require('sequelize')
  , sequelize = new Sequelize('ellxmpst', 'ellxmpst', 'e6_SMQ6Ykain0R2W9n38s4ikwsYlD-4H', {
      dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
      port:    5432, // or 5432 (for postgres),
    host: "drona.db.elephantsql.com"
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


require("./config/express")(app);
require("./routes")(app);

// Start server
server.listen(config.port, config.ip, () => {
  console.log(
    "Express server listening on %d, in %s mode",
    config.port,
    app.get("env")
  );
});

process.on('uncaughtException', function (error, req, res) {
  console.log(error.stack);
  process.exit(1);
})

// Expose app
exports = module.exports = app;


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");



// const passport = require("passport");
// const users = require("./routes/api/users");
// const app = express();// Bodyparser middleware


// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());// DB Config
// const db = require("./config/keys").mongoURI;// Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
  
//   // Passport middleware
// app.use(passport.initialize());// Passport config
// require("./config/passport")(passport);// Routes
// app.use("/api/users", users);

  // const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
  // app.listen(port, () => console.log(`Server up and running on port ${port} !`));
