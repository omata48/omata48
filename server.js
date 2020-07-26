var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
      console.log("App listening on PORT: " + PORT);
    });
});