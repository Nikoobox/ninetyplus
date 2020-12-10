// import "./styles/reset.scss";
import "./styles/index.scss";
// import "./styles/navbar.scss";
// import './styles/main.scss';
// import './styles/game.scss';
// import './styles/gamestat.scss';

import renderGames from "./scripts/games";
import renderGameStat from "./scripts/gamestat";
import renderStandings from "./scripts/standings";
// import renderPlayerStat from "./scripts/standings";


// request to update standings table
// window.addEventListener("DOMContentLoaded", () => {
//     renderStandings();
// });

// renderGames('Regular Season - 11');
// request to for all upcoming weekend fixtures

window.addEventListener("DOMContentLoaded", () => {
    let round = 'Regular Season - 11' ;
    // console.log(round)
    renderGames(round);
    // renderGameStat();
    renderStandings();
});

// import renderGameById from './scripts/game';