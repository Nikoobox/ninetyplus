import axios from "axios";
import field from '../../assets/field.png';
import renderGameStat from './gamestat';
import getFixturePlayersStat from "./getFixturePlayersStat";
import renderPlayerModal from './renderPlayerModal';
import openInstructionsModal from './openInstructionsModal';

const renderGameById = (fixtureId, score1, score2) => {

    const leagueInfoDiv = document.getElementById("league-info");
    leagueInfoDiv.innerHTML = "<div></div>";
    leagueInfoDiv.classList.remove('left');

    const allGamesContentDiv = document.getElementById("all-games");
    allGamesContentDiv.innerHTML = "<div id='one-game'></div>";

    axios.get(`./game?fixtureId=${fixtureId}`).then((res) => {

        //clear live updates interval and local storage
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.clear();

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
            <div id='gk-1' class='rows'></div>
            <div id='def-1' class='rows'></div>
            <div id='mid-1' class='rows'></div>
            <div id='fwd-1' class='rows'></div>
            <div id='fwd-2' class='rows'></div>
            <div id='mid-2' class='rows'></div>
            <div id='def-2' class='rows'></div>
            <div id='gk-2' class='rows'></div>
        </div>
        `;

        oneGameContentDiv.append(fieldDiv);
        
        const gk1Div = document.getElementById("gk-1");
        const def1Div = document.getElementById("def-1");
        const mid1Div = document.getElementById("mid-1");
        const fwd1Div = document.getElementById("fwd-1");
        const gk2Div = document.getElementById("gk-2");
        const def2Div = document.getElementById("def-2");
        const mid2Div = document.getElementById("mid-2");
        const fwd2Div = document.getElementById("fwd-2");

        //adding players inside squads section
        const team1Div = document.getElementById("team-1-box");
            team1Div.innerHTML = `
                        <div class='team-1-header-box'>
                            <div class='name'>${res.data.response[0].team.name} </div>
                            <div class='logo'>
                            <img src="${res.data.response[0].team.logo}"/>
                            </div> 
                        </div>`

        const team2Div = document.getElementById("team-2-box");
            team2Div.innerHTML = `
                        <div class='team-2-header-box'>
                            <div class='name'>${res.data.response[1].team.name}</div>
                            <div class='logo'>
                                <img src="${res.data.response[1].team.logo}"/>
                            </div> 
                        </div>`

        //place players on a field according to their actual position and team formation
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
                    if(plr.player.pos === 'G'){
                        const div = document.createElement('div');
                        div.classList.add('pl1', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText= plr.player.number;
                        gk1Div.append(div);
                    } else if (plr.player.pos === 'D'){
                        const div = document.createElement('div');
                        div.classList.add('pl1', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        def1Div.append(div);
                    } else if (plr.player.pos === 'M') {
                        const div = document.createElement('div');
                        div.classList.add('pl1', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        mid1Div.append(div);
                    } else if (plr.player.pos === 'F') {
                        const div = document.createElement('div');
                        div.classList.add('pl1', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        fwd1Div.append(div);
                    }
                    team1Div.appendChild(playerDiv);
                } else {
                    const playerDiv = document.createElement('div');
                    playerDiv.classList.add('team-2')
                    playerDiv.innerHTML = `
                        <div class='number'>${plr.player.number}</div>
                        <div class='name'>${plr.player.name}</div> 
                        <div class='pos'>  (${plr.player.pos})</div>
                    `
                    if (plr.player.pos === 'G') {
                        const div = document.createElement('div');
                        div.classList.add('pl2','pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        gk2Div.append(div);
                    } else if (plr.player.pos === 'D') {
                        const div = document.createElement('div');
                        div.classList.add('pl2', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        def2Div.append(div);
                    } else if (plr.player.pos === 'M') {
                        const div = document.createElement('div');
                        div.classList.add('pl2', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        mid2Div.append(div);
                    } else if (plr.player.pos === 'F') {
                        const div = document.createElement('div');
                        div.classList.add('pl2', 'pl-select');
                        div.setAttribute('playerId', plr.player.id);
                        div.setAttribute('teamId', command.team.id);
                        div.innerText = plr.player.number;
                        fwd2Div.append(div);
                    }
                    team2Div.appendChild(playerDiv, fixtureId)
                }
            })
        })

        renderGameStat(fixtureId, score1, score2);
        
        getFixturePlayersStat(fixtureId).then((FixturePlayersStat) => {
            //modal functionality
            renderPlayerModal(squadsDiv, FixturePlayersStat, fixtureId);
        });
        
        openInstructionsModal();
    }).catch(err => {
        console.log(err)
    });
};

export default renderGameById;
