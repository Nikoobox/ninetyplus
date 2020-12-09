import axios from "axios";
import renderGameById from './game';

const renderGames = () => {
    const allGamesDiv = document.getElementById("all-games")
    const allGamesBoxDiv = document.createElement("div");
    
    axios.get('./games').then((res) => {
        console.log(res.data.response);
        const fixturesArr = res.data.response;

        const sectionNameDiv = document.createElement("div");
        let currentRoundString = res.data.response[0].league.round;
        let currentRound = `Round ${currentRoundString.split(' ').pop()} `;
        
        sectionNameDiv.innerText = `Games - ${currentRound}`;
        sectionNameDiv.classList.add("section-name");
        allGamesDiv.append(sectionNameDiv);
        allGamesBoxDiv.classList.add("all-games-box");
        allGamesDiv.append(allGamesBoxDiv);
        const gameLiveStatus = ['1H','HT','2H','ET','P','BT'];
        const gameNotLiveStatus = ['NS'];
        
        fixturesArr.forEach((fix, idx) => {
            // const date = fix.date;
            const team1 = fix.teams.home.name;
            const logo1 = fix.teams.home.logo;
            const team2 = fix.teams.away.name;
            const logo2 = fix.teams.away.logo;
            const score1 = fix.goals.home;
            const score2 = fix.goals.away;
            const gameStatus = fix.fixture.status.short;
             
         
            const fixtureRowDiv = document.createElement('div');
            fixtureRowDiv.classList.add('fixture-box');
            fixtureRowDiv.addEventListener('click', () => renderGameById());

            const scoreBoxDiv = document.createElement('div');
            scoreBoxDiv.classList.add('score-box');
            // if game is live then show 'score', otherwise show 'vs'
            const temp = gameLiveStatus.includes(gameStatus) ? `
            <div class="score-box">
                <div class='score'>${score1}</div>
                <div class='score'>${score2}</div>
            </div>
            `: '<div class="vs">vs</div>';
            
            fixtureRowDiv.innerHTML = gameNotLiveStatus.includes(gameStatus) ? `
            <div class='team1-box'>
                <div class="name">${team1}</div>
                <div class="logo"><img src="${logo1}"/></div>
            </div>
            ${temp}
            <div class='team2-box'>
                <div class="logo"><img src="${logo2}"/></div>
                <div class="name">${team2}</div>
            </div>`: "";

            allGamesBoxDiv.appendChild(fixtureRowDiv);
        });
    }).catch(err => {
        console.log(err)
    });
};

export default renderGames;