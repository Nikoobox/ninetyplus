import axios from "axios";

const renderGameStat = () => {
    console.log('HI FROM GAME STAT');
    console.log(d3);
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
        // console.log(gameStat)
        const shotsOn = [];
        const shotsOff = [];
        const fouls = [];

        teamsStat.forEach((teamStat, idx1) => {
            teamStat.statistics.forEach(stat => {
                if (stat.type === "Shots on Goal"){
                    shotsOn.push(stat.value)
                }
                if (stat.type === "Shots off Goal") {
                    shotsOff.push(stat.value)
                }
                if (stat.type === "Fouls") {
                    fouls.push(stat.value)
                }
            })
        })
       
        gameStatDiv.innerHTML =
            `
            <div>Game Statistics</div>
            <div class='stat-box'>
                <svg id='stat-1-box'></svg>
                <div id='stat-2-box'>Stat2</div>
            </div>
            `;
        const container = d3.select('#stat-1-box')

        container
        .selectAll('.bar')
        .data(shotsOn)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', 30)
        .attr('height', data => data*10)



        
    }).catch(err => {
        console.log(err)
    });
};

export default renderGameStat;