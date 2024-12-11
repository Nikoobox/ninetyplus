import axios from "axios";
import renderGameById from './game';


const getLiveGamesInfo = (gameId) => {
    // console.log('Hi from livegames')
    // const allGamesContentDiv = document.getElementById("all-games");
    // allGamesContentDiv.innerHTML = "<div class='one-game'></div>"
    axios.get('./livegames').then((res) => {
        // console.log(res.data.response);


    }).then(() => {
        renderGameById();
    }).catch(err => {
        console.log(err)
    });
}

export default getLiveGamesInfo;