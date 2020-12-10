const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();

const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get("/standings", (req, res) => {
    fetch("https://v3.football.api-sports.io/standings?league=39&season=2020", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${process.env.API_KEY}`
        }
    }).then(response => {
        return response.text();
    }).then(body => {
        let results = JSON.parse(body);
            console.log(results); // logs to server
            res.send(results); // sends to frontend
    }).catch(err => {
        console.log(err);
    });
});

app.get("/games", (req, res) => {
    console.log(req.query)
    fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=2020&round=${req.query.round}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${process.env.API_KEY}`
        }
    }).then(response => {
        return response.text();
    }).then(body => {
        let results = JSON.parse(body);
        console.log(results); // logs to server
        res.send(results); // sends to frontend
    }).catch(err => {
        console.log(err);
    });
});

app.get("/livegames", (req, res) => {
    // fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2020&live=all", {
    fetch("https://v3.football.api-sports.io/fixtures?&season=2020&live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${process.env.API_KEY}`
        }
    }).then(response => {
        return response.text();
    }).then(body => {
        let results = JSON.parse(body);
        console.log(results); // logs to server
        res.send(results); // sends to frontend
    }).catch(err => {
        console.log(err);
    });
});

app.get("/game", (req, res) => {
    // fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2020&live=all", {
    fetch(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${req.query.fixtureId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${process.env.API_KEY}`
        }
    }).then(response => {
        return response.text();
    }).then(body => {
        let results = JSON.parse(body);
        console.log(results); // logs to server
        res.send(results); // sends to frontend
    }).catch(err => {
        console.log(err);
    });
});

app.get("/gamestat", (req, res) => {
    console.log(req.query)
    fetch(`https://v3.football.api-sports.io/fixtures/statistics?fixture=${req.query.fixtureId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": `${process.env.API_KEY}`
        }
    }).then(response => {
        return response.text();
    }).then(body => {
        let results = JSON.parse(body);
        console.log(results); // logs to server
        res.send(results); // sends to frontend
    }).catch(err => {
        console.log(err);
    });
});


app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`);
});


