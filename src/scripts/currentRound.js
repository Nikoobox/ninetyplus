import axios from "axios";
import renderGames from "./games";
import renderStandings from "./standings";

const currentRound = () => {
    
    axios.get(`currentround`).then((res) => {
        const currentR = res.data.response[0];
        console.log(res.data.response[0]);

        renderGames(currentR);
        renderStandings();
        // 
        const navbarLogo = document.querySelector("#navbar-logo");
        navbarLogo.addEventListener('click', () => renderGames(currentR));

    }).catch(err => {
        console.log(err)
    });
};

export default currentRound;