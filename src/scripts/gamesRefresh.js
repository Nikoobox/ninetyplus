import renderGames from './games';

//gamesRefresh.js
const gamesRefresh = (btnLiveUpdates, btnNoLiveUpdates, round) => {

    let interval;
    
    btnLiveUpdates.addEventListener('click', () => {
        renderGames(round)
        interval = setInterval(() => renderGames(round), 10000);
        localStorage.setItem('localStInterval', interval);
        let counter = 0
        localStorage.setItem('localStCounter', counter);
    });
    
    btnNoLiveUpdates.addEventListener('click', () => {
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.removeItem('localStInterval');

        btnLiveUpdates.disabled = false;
        btnNoLiveUpdates.setAttribute('disabled', true);
    });


    if (localStorage.getItem('localStInterval') !== null){
        btnLiveUpdates.setAttribute('disabled', true);
        btnNoLiveUpdates.disabled = false;
    }else{
        btnLiveUpdates.disabled = false;
        btnNoLiveUpdates.setAttribute('disabled', true);
    }
}

export default gamesRefresh;

