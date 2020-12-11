import "./styles/index.scss";


import renderGames from "./scripts/games";
import renderGameStat from "./scripts/gamestat";
import renderStandings from "./scripts/standings";
import renderPlayerStat from "./scripts/standings";


// request to update standings table
// window.addEventListener("DOMContentLoaded", () => {
//     renderStandings();
// });

// renderGames('Regular Season - 11');



window.addEventListener("DOMContentLoaded", () => {
    let round = 'Regular Season - 11' ;
    renderGames(round);
    // renderGameStat();
    renderStandings();

    const navbarLogo = document.querySelector("#navbar-logo");
    navbarLogo.addEventListener('click', () => renderGames(round));
});

