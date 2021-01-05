import "./styles/index.scss";
import currentRound from "./scripts/currentRound";
import renderStandings from "./scripts/standings";
import openInstructionsModal from "./scripts/openInstructionsModal";



window.addEventListener("DOMContentLoaded", () => {
    // let round = 'Regular Season - 12' ;

    // GET CURRENT ROUND AND RENDER GAMES AND STANDINGS
    currentRound()
        openInstructionsModal(); 
    
    // renderGames(round);
    // renderGameStat();
    

    // const navbarLogo = document.querySelector("#navbar-logo");
    // navbarLogo.addEventListener('click', () => renderGames(round));
});

