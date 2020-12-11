import axios from "axios";

const renderStandings= () => {
    const standingsDiv = document.getElementById("standings")
    const standingBoxDiv = document.createElement("div");
    standingBoxDiv.classList.add("team-standing-box");
    standingsDiv.append(standingBoxDiv);
    
    axios.get('./standings').then((res) => {
        
        const teamsArr = res.data.response[0].league.standings[0];
        teamsArr.forEach((team, idx) => {
            
            const teamDiv = document.createElement("div");
            const teamRankBoxDiv = document.createElement("div");
            const teamNameDiv = document.createElement("div");
            const teamPointsDiv = document.createElement("div");
            const teamRankDiv = document.createElement("div");
            
            teamNameDiv.innerText = team.team.name;
            teamPointsDiv.innerText = team.points;
            teamRankDiv.innerText = team.rank;

            teamDiv.classList.add("team-standing-row");
            teamRankBoxDiv.classList.add("team-rank-box");
            teamRankDiv.classList.add("team-rank");

            teamRankBoxDiv.append(teamRankDiv, teamNameDiv)
            teamDiv.append(teamRankBoxDiv, teamPointsDiv);
            standingBoxDiv.append(teamDiv);
            
        });
    }).catch(err=>{
        console.log(err)
    });
};

export default renderStandings;