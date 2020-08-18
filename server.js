const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.end.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get("/api/test", function(req,res) {
    res.json({
        test: "test"
    })
});

app.get("*", function(req, res) {
    res.sendFile("./client/build/index.html");
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));