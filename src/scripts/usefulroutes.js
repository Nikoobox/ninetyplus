// english league id=39

// Get all Standings from one {league} & {season}
// https://v3.football.api-sports.io/standings?league=39&season=2020

// get next 20 fixtures of season 2020
//https://v3.football.api-sports.io/fixtures?league=39&season=2020&next=20

// get live fixtures
// https://v3.football.api-sports.io/fixtures?league=39&season=2020&live=all

// all fixtures from this date to this date
// https://v3.football.api-sports.io/fixtures?league=39&season=2020&from=2020-12-07&to=2020-12-20

// ALL GAMES FROM THIS DATE
//https://v3.football.api-sports.io/fixtures?date=2020-12-12&league=39&season=2020

// get fixtures of round 12
// https://v3.football.api-sports.io/fixtures?league=39&season=2020&round=Regular Season - 12 
// (getting back array response with 10 fixture objects) see teams to get info of each team
// "fixture": {
//     "id": 592251,
//         "referee": null,
//         "timezone": "UTC",
//         "date": "2020-12-13T19:15:00+00:00",
//         "timestamp": 1607886900,
//         "periods": {
//          "first": null,
//          "second": null
//     },
//     "venue": {
//         "id": 494,
//         "name": "Emirates Stadium",
//         "city": "London"
//     },
//     "status": {
//         "long": "Not Started",
//         "short": "NS",
//         "elapsed": null
//     }
// },
// "league": {
//     "id": 39,
//     "name": "Premier League",
//     "country": "England",
//     "logo": "https://media.api-sports.io/football/leagues/39.png",
//     "flag": "https://media.api-sports.io/flags/gb.svg",
//     "season": 2020,
//     "round": "Regular Season - 12"
// },
// "teams": {
//     "home": {
//     "id": 42,
//     "name": "Arsenal",
//     "logo": "https://media.api-sports.io/football/teams/42.png",
//     "winner": null
//     },
//     "away": {
//         "id": 44,
//         "name": "Burnley",
//         "logo": "https://media.api-sports.io/football/teams/44.png",
//         "winner": null
//     }
// },
// "goals": {
//     "home": null,
//     "away": null
// },
// "score": {
//     "halftime": {
//         "home": null,
//         "away": null
//     },
//     "fulltime": {
//         "home": null,
//         "away": null
//     },
//     "extratime": {
//         "home": null,
//         "away": null
//     },
//     "penalty": {
//         "home": null,
//         "away": null
//     }
// }
//         }, 
// {
// "fixture": {
//     "id": 592252,
//         "referee": null,
//             "timezone": "UTC",
//                 "date": "2020-12-13T14:15:00+00:00",
//                     "timestamp": 1607868900,
//                         "periods": {
//         "first": null,
//             "second": null
//     },
//     "venue": {
//         "id": 525,
//             "name": "Selhurst Park",
//                 "city": "London"
//     },
//     "status": {
//         "long": "Not Started",
//             "short": "NS",
//                 "elapsed": null
//     }
// },
// "league": {
//     "id": 39,
//         "name": "Premier League",
//             "country": "England",
//                 "logo": "https://media.api-sports.io/football/leagues/39.png",
//                     "flag": "https://media.api-sports.io/flags/gb.svg",
//                         "season": 2020,
//                             "round": "Regular Season - 12"
// },
// "teams": {
//     "home": {
//         "id": 52,
//             "name": "Crystal Palace",
//                 "logo": "https://media.api-sports.io/football/teams/52.png",
//                     "winner": null
//     },
//     "away": {
//         "id": 47,
//             "name": "Tottenham",
//                 "logo": "https://media.api-sports.io/football/teams/47.png",
//                     "winner": null
//     }
// },
// "goals": {
//     "home": null,
//         "away": null
// },
// "score": {
//     "halftime": {
//         "home": null,
//             "away": null
//     },
//     "fulltime": {
//         "home": null,
//             "away": null
//     },
//     "extratime": {
//         "home": null,
//             "away": null
//     },
//     "penalty": {
//         "home": null,
//             "away": null
//     }
// }
//         }

// SEE TIPS FOR EFFICIENT CALLS
// https://rapidapi.com/api-sports/api/api-football/tutorials/how-to-save-calls-to-the-api

// 1) To update fixtures and events, a single call to the fixtures/live endpoint is enough as it returns all current fixtures and their events, this avoids calling the endpoint events for each fixtures and so we're saving on API calls.

// The fixtures / live endpoint will return a list of all current fixtures whose statusShort will be one of these 1H, HT, 2H, ET, P, BT you can check the documentation for more information about fixtures status.

//     Let's try

// fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "YourApiKeyHere"
//     }
// })
// Return:

// {
//     "api": {
//         "results": 1,
//             "fixtures": [
//                 {
//                     "fixture_id": 245427,
//                     "league_id": 979,
//                     "league": {
//                         "name": "A-League",
//                         "country": "Australia",
//                         "logo": "https://media.api-sports.io/football/leagues/188.png",
//                         "flag": "https://media.api-sports.io/flags/au.svg"
//                     },
//                     "event_date": "2020-07-22T09:30:00+00:00",
//                     "event_timestamp": 1595410200,
//                     "firstHalfStart": 1595410200,
//                     "secondHalfStart": null,
//                     "round": "Regular Season - 27",
//                     "status": "First Half",
//                     "statusShort": "1H",
//                     "elapsed": 44,
//                     "venue": "HBF Park",
//                     "referee": "Alexander King, Australia",
//                     "homeTeam": {
//                         "team_id": 940,
//                         "team_name": "Perth Glory",
//                         "logo": "https://media.api-sports.io/football/teams/940.png"
//                     },
//                     "awayTeam": {
//                         "team_id": 942,
//                         "team_name": "Wellington Phoenix",
//                         "logo": "https://media.api-sports.io/football/teams/942.png"
//                     },
//                     "goalsHomeTeam": 0,
//                     "goalsAwayTeam": 1,
//                     "score": {
//                         "halftime": "0-1",
//                         "fulltime": null,
//                         "extratime": null,
//                         "penalty": null
//                     },
//                     "events": [
//                         {
//                             "elapsed": 32,
//                             "elapsed_plus": null,
//                             "team_id": 942,
//                             "teamName": "Wellington Phoenix",
//                             "player_id": 19400,
//                             "player": "G. Hooper",
//                             "assist_id": 94322,
//                             "assist": "C. Mccowatt",
//                             "type": "Goal",
//                             "detail": "Normal Goal",
//                             "comments": null
//                         }
//                     ]
//                 }
//             ]
//     }
// }



// after we call
// function getFixtureById(fixture_id) {

//     fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/id/" + fixture_id, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//             "x-rapidapi-key": "YourApiKeyHere"
//         }
//     })
//         .then((response) => response.json())
//         .then(function (response) {

//             // We can now check if the data is present for each of the fields and save or display them
//             // The lineups and the fixtures statistics being objects we adapt our check to know if the field contains data
//             if (response.api.fixtures[0].lineups != null && Object.keys(response.api.fixtures[0].lineups).length !== 0) {

//                 // Saving or display lineups
//             }
//             if (response.api.fixtures[0].statistics != null && Object.keys(response.api.fixtures[0].statistics).length !== 0) {

//                 // Saving or display statistics
//             }

//             if (response.api.fixtures[0].players != null && Array.isArray(response.api.fixtures[0].players) && response.api.fixtures[0].players.length > 0) {

//                 // Saving or display players statistics
//             }
//         })
// }