import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/navbar.scss";
import './styles/main.scss';

// import Test from './scripts/test';

// request to update standings table
// import renderStandings from "./scripts/standings";
// window.addEventListener("DOMContentLoaded", () => {
//     renderStandings();
// });


// request to for all upcoming weekend fixtures
import renderGames from "./scripts/games";
window.addEventListener("DOMContentLoaded", () => {
    renderGames();
});