const db = require("../models");

module.exports = function(app) {
    app.get("/api", function(req,res) {
        return res.json([]);
    })
}