
const renderPlayerStat = (playerIdm, teamIdm, fixtureIdm, FixturePlayersStatm) => {

    let teamInfo = {};
    let playerInfo={};
    let playerStat = {};

    FixturePlayersStatm.forEach((squad)=>{

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


    const modalBox = document.getElementById("modal-box");

    const rightBoxData = (playerStat.games.position === 'G') ?
        `<div class='saves-box row'>
            <div class='title'>Saves: </div>
            <div class='value'>${playerStat.goals.saves ? playerStat.goals.saves : 0}</div>
        </div>
        <div class='conceded-box row'>
            <div class='title'>Goals conceded: </div>
            <div class='value'>${playerStat.goals.conceded ? playerStat.goals.conceded : 0}</div>
        </div>
        ` 
    : 
        `<div class='duels-box row'>
            <div class='title'>Duels Won/Total: </div>
            <div class='value'>${playerStat.duels.won ? playerStat.duels.won : 0} / ${playerStat.duels.total ? playerStat.duels.total : 0}</div>
        </div>
        <div class='passes-box row'>
            <div class='title'>Passes(Accuracy%): </div>
            <div class='value'>${playerStat.passes.total ? playerStat.passes.total : 0} (${playerStat.passes.accuracy ? playerStat.passes.accuracy : 0}%)</div>
        </div>
        <div class='shots-box row'>
            <div class='title'>Shots: </div>
            <div class='value'>${playerStat.shots.total ? playerStat.shots.total : 0}</div>
        </div>
         <div class='goals-box row'>
            <div class='title'>Goals: </div>
            <div class='value'>${playerStat.goals.total ? playerStat.goals.total : 0} </div>
        </div>
        ` 
    ;

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
                    <div class='value'>${playerStat.games.rating ? playerStat.games.rating : 0}</div>
                </div>
                <div class='minutes-box row'>
                    <div class='title'>Minutes: </div>
                    <div class='value'>${playerStat.games.minutes ? playerStat.games.minutes : 0}</div>
                </div>

                ${rightBoxData}
                
            </div>
        `;
};

export default renderPlayerStat;