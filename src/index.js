// import "./styles/reset.scss";
import "./styles/index.scss";
// import "./styles/navbar.scss";
// import './styles/main.scss';
// import './styles/game.scss';
// import './styles/gamestat.scss';

import renderGames from "./scripts/games";
import renderGameStat from "./scripts/gamestat";
import renderStandings from "./scripts/standings";


// request to update standings table
// window.addEventListener("DOMContentLoaded", () => {
//     renderStandings();
// });


// request to for all upcoming weekend fixtures

window.addEventListener("DOMContentLoaded", () => {
    renderGames();
    renderGameStat()
});

// import renderGameById from './scripts/game';