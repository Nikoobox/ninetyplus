import axios from "axios";
import field from '../../assets/field.png';

const renderGameById = () => {
    console.log('Hi from game!')
    const allGamesContentDiv = document.getElementById("all-games");
    allGamesContentDiv.innerHTML = "<div id='one-game'></div>"
    axios.get('./game').then((res) => {
        console.log(res.data.response);
    
    const oneGameContentDiv = document.getElementById("one-game");
    const fieldDiv = document.createElement('div');
    const squadsDiv = document.createElement('div');
    fieldDiv.classList.add('field-box');
    squadsDiv.classList.add('squad-box');

    squadsDiv.innerHTML =
        `
        <div id='team-1-box'></div>
        <div id='team-2-box'></div>
        `;
    oneGameContentDiv.append(squadsDiv);

    fieldDiv.innerHTML =
        `
    <div class="field-img">
        <img class="image" src="${field}"/>
        <div class='gk-1 rows'>goalkiper-1</div>
        <div class='def-1 rows'>defender-1</div>
        <div class='mid-1 rows'>midfielder-1</div>
        <div class='fwd-1 rows'>forward-1</div>
        <div class='gk-2 rows'>goalkiper-2</div>
        <div class='def-2 rows'>defender-2</div>
        <div class='mid-2 rows'>midfielder-2</div>
        <div class='fwd-2 rows'>forward-2</div>
    </div>
    `;
    oneGameContentDiv.append(fieldDiv);
    //adding players inside squads section - left of field
    const team1Div = document.getElementById("team-1-box");
        team1Div.innerHTML = `
                    <div class='team-1-header-box'>
                    ${res.data.response[0].team.name} -Home
                    </div>`

    const team2Div = document.getElementById("team-2-box");
        team2Div.innerHTML = `
                    <div class='team-2-header-box'>
                    ${res.data.response[1].team.name} -Away
                    </div>`

    res.data.response.forEach((command, cidx) => {
        command.startXI.forEach((plr, pidx) => {
            if (cidx === 0) {
                const playerDiv = document.createElement('div');
                playerDiv.classList.add('team-1')
                playerDiv.innerHTML = `
                    <div class='number'>${plr.player.number}</div>
                    <div class='name'>${plr.player.name}</div> 
                    <div class='pos'>  (${plr.player.pos})</div>
                `

                team1Div.appendChild(playerDiv)
            } else {
                const playerDiv = document.createElement('div');
                playerDiv.classList.add('team-2')
                playerDiv.innerHTML = `
                    <div class='number'>${plr.player.number}</div>
                    <div class='name'>${plr.player.name}</div> 
                    <div class='pos'>  (${plr.player.pos})</div>
                `
                team2Div.appendChild(playerDiv)
            }
        })
    })

        

    }).catch(err => {
        console.log(err)
    });
};


export default renderGameById;
