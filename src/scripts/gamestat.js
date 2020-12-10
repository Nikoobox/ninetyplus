import axios from "axios";

const renderGameStat = () => {
    console.log('HI FROM GAME STAT');
    // console.log(d3);
    // const oneGameContentDiv = document.getElementById("one-game");
    const standingsDiv = document.getElementById("standings")
    // const testBoxDiv = document.createElement("div");
    // testBoxDiv.classList.add("test-box");
    // oneGameContentDiv.append(gameStatDiv);
    axios.get(`/gamestat/?fixtureId=${157124}`).then((res) => {
        console.log(res.data.response);
        const gameStatDiv = document.createElement('div');
        gameStatDiv.classList.add('game-stat-box');
        standingsDiv.append(gameStatDiv);
        const teamsStat = res.data.response;
        const shotsOn = [];
        const shotsOff = [];
        const fouls = [];
        const yc = [];

        teamsStat.forEach((teamStat, idx1) => {
            teamStat.statistics.forEach(stat => {
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

        gameStatDiv.innerHTML =
            `
            <div>Game Statistics</div>
            <div class='stat-box'>
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
            let ratio = (stat1 / total ) *100;
            console.log(ratio)
            let elem = document.getElementById(idName);
            elem.style.width = ratio + "%";
        }

        renderStats(shotsOn[0].value, shotsOn[0].value + shotsOn[1].value, "shotsOn")
        renderStats(shotsOff[0].value, shotsOff[0].value + shotsOff[1].value, "shotsOff")
        renderStats(fouls[0].value, fouls[0].value + fouls[1].value, "fouls")
        renderStats(yc[0].value, yc[0].value + yc[1].value, "yc")
      
    }).catch(err => {
        console.log(err)
    });
};

export default renderGameStat;