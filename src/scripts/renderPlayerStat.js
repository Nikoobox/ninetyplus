import axios from "axios";
// import renderGameById from './game';

const renderPlayerStat = (playerIdm, teamIdm, fixtureIdm, FixturePlayersStatm) => {
    console.log('hi from  RENDER PLAYER STAT');
    console.log(playerIdm);
    console.log(teamIdm);
    console.log(fixtureIdm);
    console.log(FixturePlayersStatm);

    let teamInfo = {};
    let playerInfo={};
    let playerStat = {};

    FixturePlayersStatm.forEach((squad)=>{
        console.log(squad);
        console.log(teamIdm);
        console.log(squad.team.id)
        if (squad.team.id === teamIdm) {
            teamInfo = squad;
            squad.players.forEach((player, idx)=>{
                if (player.player.id === playerIdm){
                    playerInfo = player.player;
                    playerStat = player.statistics[0];
                }
            })
        };
    })

    console.log(teamInfo);
    console.log(playerInfo);
    console.log(playerStat);

    const modalBox = document.getElementById("modal-box");
    //check if goalkeeper redner one thing , for field player- another
    modalBox.innerHTML =
        `   <div class='left-box'>
                <div class='pl-img-box'>
                    <img src="${playerInfo.photo}"/>
                </div>
                <div class='pl-name'>${playerInfo.name}</div>
                <div class='position-number-box'>
                    <div class='value'>Number: ${playerStat.games.number}</div>
                </div>
            </div>
             <div class='right-box'>
                <div class='position-box row'>
                    <div class='title'>Position: </div>
                    <div class='value'>${playerStat.games.position}</div>
                </div>
                <div class='rating-box row'>
                    <div class='title'>Rating: </div>
                    <div class='value'>${playerStat.games.rating}</div>
                </div>
                <div class='minutes-box row'>
                    <div class='title'>Minutes: </div>
                    <div class='value'>${playerStat.games.minutes}</div>
                </div>
                <div class='saves-box row'>
                    <div class='title'>Saves: </div>
                    <div class='value'>${playerStat.goals.saves}</div>
                </div>
                <div class='conceded-box row'>
                    <div class='title'>Goals conceded: </div>
                    <div class='value'>${playerStat.goals.conceded}</div>
                </div>
                
            </div>
        `;
   
   
};

export default renderPlayerStat;