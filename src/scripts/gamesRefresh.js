import renderGames from './games';

const gamesRefresh = (btnLiveUpdates, btnNoLiveUpdates, round) => {

    let interval;
    
    btnLiveUpdates.addEventListener('click', () => {
        renderGames(round)
        interval = setInterval(() => renderGames(round), 10000);
        localStorage.setItem('localStInterval', interval);
        
        console.log(`interval is ${interval}`)
        console.log(`Local storage interval value is ${localStorage.getItem('localStInterval')}`)
    });
    
    btnNoLiveUpdates.addEventListener('click', () => {
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.removeItem('localStInterval');

        console.log(`after clearing, Local storage interval is ${localStorage.getItem('localStInterval')}`);

        btnLiveUpdates.disabled = false;
        btnNoLiveUpdates.setAttribute('disabled', true);
    });


    if (localStorage.getItem('localStInterval') !== null){
        console.log('if')
        console.log(localStorage.getItem('localStInterval'))
        btnLiveUpdates.setAttribute('disabled', true);
        btnNoLiveUpdates.disabled = false;
    }else{
        console.log('else')
        console.log(localStorage.getItem('localStInterval'))
        btnLiveUpdates.disabled = false;
        btnNoLiveUpdates.setAttribute('disabled', true);
    }
        
}

export default gamesRefresh;

