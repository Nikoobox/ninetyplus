const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();

// to run app
// npm start app
// http://localhost:8000/
// git push heroku master

const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

const dateYear = new Date().getFullYear();
const mon = new Date().getMonth();
const dateYearNorm =
  dateYear % 2 === 0 || mon + 1 >= 7 ? dateYear : dateYear - 1;
console.log("fetching year", dateYearNorm);

app.use(express.static("dist"));

app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.get("/leagues/seasons", (req, res) => {
  fetch(`https://v3.football.api-sports.io`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`,
    },
  })
    .then((response) => {
      console.log("season is: ", season);
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/currentround", (req, res) => {
  fetch(
    `https://v3.football.api-sports.io/fixtures/rounds?season=${dateYearNorm}&league=39&current=true`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/games", (req, res) => {
  fetch(
    `https://v3.football.api-sports.io/fixtures?league=39&season=${dateYearNorm}&round=${req.query.round}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/standings", (req, res) => {
  fetch(
    `https://v3.football.api-sports.io/standings?league=39&season=${dateYearNorm}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/game", (req, res) => {
  fetch(
    `https://v3.football.api-sports.io/fixtures/lineups?fixture=${req.query.fixtureId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/gamestat", (req, res) => {
  console.log(req.query);
  fetch(
    `https://v3.football.api-sports.io/fixtures/statistics?fixture=${req.query.fixtureId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/fixture_players_stat", (req, res) => {
  console.log(req.query);
  fetch(
    `https://v3.football.api-sports.io/fixtures/players?fixture=${req.query.fixtureId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      res.send(results); // sends to frontend
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
