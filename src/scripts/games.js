import axios from "axios";
import renderGameById from './game';

const renderGames = (round) => {
    console.log(round)
    const allGamesDiv = document.getElementById("all-games")
    const allGamesBoxDiv = document.createElement("div");
    allGamesDiv.innerHTML = "<div></div>";

    axios.get(`./games?round=${round}`).then((res) => {
        console.log(res.data.response);
        const fixturesArr = res.data.response;
        const sectionNameDiv = document.createElement("div");
        sectionNameDiv.classList.add("section-name");
        
        const leagueInfoDiv = document.getElementById("league-info");

        const nextSeason = res.data.response[0].league.season + 1;

        leagueInfoDiv.innerHTML = `
        <div class='league-box'>
            <div class='country-box'>
                <div class='name'>${res.data.response[0].league.country}</div>
                <div class='flag'>
                    <img src="${res.data.response[0].league.flag}"/>
                </div>
            </div>
             <div class='league-name'>
                ${res.data.response[0].league.name}
            </div>
            <div class='logo-box'>
                <img src="${res.data.response[0].league.logo}"/>
            </div>
             <div class='season-box'>
                Season ${res.data.response[0].league.season}-${nextSeason}
            </div>
        </div>
        `;

        let currentRoundString = res.data.response[0].league.round;
        let currentRound = `${currentRoundString.split(' ').pop()} `;
        let prevRound = parseInt(currentRound) - 1;
        let nextRound = parseInt(currentRound) + 1;

        sectionNameDiv.innerHTML = `
            <div class='roundPrev'>
                <<   Round ${prevRound} 
            </div>
            <div class='roundCurr'>
                All Games - Round ${currentRound} 
            </div>
            <div class='roundNext'>
                Round ${nextRound}   >>
            </div>
            `
        
        allGamesDiv.append(sectionNameDiv);

        const pRound = `Regular Season - ${prevRound}`;
        const nRound = `Regular Season - ${nextRound}`;
        const previousRound = document.querySelector(".roundPrev");
        const followingRound = document.querySelector(".roundNext");
        // previousRound.setAttribute('roundName', pRound);
        previousRound.addEventListener('click', () => renderGames(pRound));
        followingRound.addEventListener('click', () => renderGames(nRound));    
       
        allGamesBoxDiv.classList.add("all-games-box");
        allGamesDiv.append(allGamesBoxDiv);
        const gameLiveStatus = ['1H','HT','2H','ET','P','BT'];
        const gameNotLiveStatus = ['NS', 'FT'];
        
        fixturesArr.forEach((fix, idx) => {
            const team1 = fix.teams.home.name;
            const logo1 = fix.teams.home.logo;
            const team2 = fix.teams.away.name;
            const logo2 = fix.teams.away.logo;
            const score1 = fix.goals.home;
            const score2 = fix.goals.away;
            const gameStatus = fix.fixture.status.short;
            const gameId = fix.fixture.id;
         
            const fixtureRowDiv = document.createElement('div');
            fixtureRowDiv.classList.add('fixture-box');
            fixtureRowDiv.setAttribute('gameId', gameId );
            fixtureRowDiv.addEventListener('click', () => renderGameById(gameId, score1, score2));

            const scoreBoxDiv = document.createElement('div');
            scoreBoxDiv.classList.add('score-box');

            // if game is live then show 'score', otherwise show 'vs'
            const temp = (gameLiveStatus.includes(gameStatus) || gameStatus === 'FT')? `
            <div class="score-box">
                <div class='score'>${score1}</div>
                <div class='score'>${score2}</div>
            </div>
            `: '<div class="vs">vs</div>';
            
            fixtureRowDiv.innerHTML = gameNotLiveStatus.includes(gameStatus) ? `
            <div class='team1-box' >
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