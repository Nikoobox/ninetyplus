import axios from "axios";
import field from '../../assets/field.png';

const renderGameById = () => {
    console.log('Hi from game!')
    const allGamesContentDiv = document.getElementById("all-games");
    allGamesContentDiv.innerHTML = "<div id='one-game'></div>"
    axios.get('./game').then((res) => {
        console.log(res.data.response);
        // res.forEach((command)=>{
        //     command.startXI.forEach(player=>{
        //         console.log(player)
        //     })
        // })

    
    const oneGameContentDiv = document.getElementById("one-game");
    const fieldDiv = document.createElement('div');
    const squadsDiv = document.createElement('div');
    fieldDiv.classList.add('squad-box');
    squadsDiv.classList.add('field-box');
    squadsDiv.innerHTML =
        `
        <div>team1</div>
        <div>team2</div>
        `;
    fieldDiv.innerHTML = 
        `
        <div class="field-img">
            <img src="${field}"/>
            <div class='gk-1'></div>
            <div class='def-1'></div>
            <div class='mid-1'></div>
            <div class='fwd-1'></div>
            <div class='fwd-2'></div>
            <div></div>
        </div>
        `;
    oneGameContentDiv.append(squadsDiv, fieldDiv);

    }).catch(err => {
        console.log(err)
    });
};


export default renderGameById;
