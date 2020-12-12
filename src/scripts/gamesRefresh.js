import renderGames from './games'
const gamesRefresh = (btnLiveUpdates, btnNoLiveUpdates, round) => {

    let interval;
    
    btnLiveUpdates.addEventListener('click', () => {
        renderGames(round)
        interval = setInterval(() => renderGames(round), 5000);
        console.log(`interval is ${interval}`)
    
    });
    
    btnNoLiveUpdates.addEventListener('click', () => {
        clearInterval(interval);
        console.log(`clear int interval is ${interval}`)
    });
}

export default gamesRefresh;

