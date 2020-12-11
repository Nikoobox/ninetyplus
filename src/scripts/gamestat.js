import axios from "axios";

const renderGameStat = (fixtureId, score1, score2) => {
    console.log('HI FROM GAME STAT');
    const oneGameContentDiv = document.getElementById("one-game");
    const standingsDiv = document.getElementById("standings")
    // const testBoxDiv = document.createElement("div");
    // testBoxDiv.classList.add("test-box");
    axios.get(`/gamestat/?fixtureId=${fixtureId}`).then((res) => {
        console.log(res.data.response);
        const gameStatDiv = document.createElement('div');
        gameStatDiv.classList.add('game-stat-box');
        standingsDiv.append(gameStatDiv);
        oneGameContentDiv.append(gameStatDiv);
        const teamsStat = res.data.response;
        const possession = [];
        const shotsOn = [];
        const shotsOff = [];
        const fouls = [];
        const yc = [];

        teamsStat.forEach((teamStat, idx1) => {
            teamStat.statistics.forEach(stat => {
                if (stat.type === "Ball Possession") {
                    possession.push(stat);
                }
                if (stat.type === "Shots on Goal"){
                    shotsOn.push(stat);
                }
                if (stat.type === "Shots off Goal") {
                    shotsOff.push(stat);
                }
                if (stat.type === "Fouls") {
                    fouls.push(stat)
                }
                if (stat.type === "Yellow Cards") {
                    yc.push(stat)
                }
            })
        })
        // console.log(possession)
        gameStatDiv.innerHTML =
            `
            <div class='game-stat-title'>Game Statistics</div>
            <div class='stat-box'>
                <div class='scoreBox'>
                    <div class="teamHome">
                        <div class="teamLogo">
                        <img src="${res.data.response[0].team.logo}"/>
                        </div> 
                        <div class="teamName">${res.data.response[0].team.name}</div>
                        <div class='teamScore1'>${score1}</div>
                    </div>
                    <div class="teamHome">
                        <div class="teamLogo">
                        <img src="${res.data.response[1].team.logo}"/>
                        </div> 
                        <div class="teamName">${res.data.response[1].team.name}</div>
                        <div class='teamScore2'>${score2}</div>
                    </div>  
                </div>
                <div id="possProgress">
                    <div id="poss"></div> 
                </div>
                <div class="stat-name"> Ball Possession </div>
                <div id="shotsOnProgress">
                    <div id="shotsOn"></div> 
                </div>
                <div class="stat-name"> Shots on Goals </div>
                 <div id="shotsOffProgress">
                    <div id="shotsOff"></div>
                </div>
                <div class="stat-name"> Shots off Goals </div> 
                <div id="foulsProgress">
                    <div id="fouls"></div>
                </div>
                <div class="stat-name"> Fouls </div>  
                <div id="ycProgress">
                    <div id="yc"></div>
                </div>
                <div class="stat-name"> Yellow Cards </div>  
            </div>
            `;

        const renderStats = (stat1, total, idName) => {
            let elem = document.getElementById(idName);
            if (idName === 'poss'){
                elem.style.width = stat1;
            }else{
                let ratio = (stat1 / total ) *100;
                elem.style.width = ratio + "%";
            }
        }
        renderStats(possession[0].value, 0, "poss");
        renderStats(shotsOn[0].value, shotsOn[0].value + shotsOn[1].value, "shotsOn");
        renderStats(shotsOff[0].value, shotsOff[0].value + shotsOff[1].value, "shotsOff");
        renderStats(fouls[0].value, fouls[0].value + fouls[1].value, "fouls");
        renderStats(yc[0].value, yc[0].value + yc[1].value, "yc");
      
    }).catch(err => {
        console.log(err)
    });
};

export default renderGameStat;