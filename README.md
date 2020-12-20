# 90PLUS

<div align="start">
  <a href="https://ninety-plus.herokuapp.com/">Live Site</a>
</div>

## Background and Overview 
NinetyPlus is a Web App for the live soccer scores from the most polular soccer league in a world - English Premier League. Get lifetime data, teams line-ups and statistics. Data and statistics will be presented with D3.js javascript library, producing dynamic and interactive data.

## Libraries and Languages

* Javascript
* Node.js / Express
* HTML5
* CSS3
* API-Football: Restful API for soccer data
* Firebase Firestore database
* D3.js


## Features
* Visitors can select specific game and see the team formation, lineup and other game statistics.
* Each player game statistics is displayed on click.
![Games](dist/images/games2.gif)
<p>&nbsp;</p>

* Live updates feature could be manually turned on/off to control data usage. 
![Live Demo](dist/images/live_demo.gif)
<p>&nbsp;</p>

* Visitors can vote for the game winner. The voting data is stored with Firebase/Firestore and will be displayed with by D3.js.
![Voting](dist/images/voting.gif)
<p>&nbsp;</p>

## Code Highlights

Live updates is a key feature of 90PLUS web app. When 'Activate Live Updates' button is clicked, gamesRefresh.js function stores setInterval id into Local Starage to allow page refresh. Set interval reference is cleared when user clicks on 'Stop Live Updates'.

```
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
```

Code below sets a newCounter variable to keep track of page refreshes (API calls). Currently, a newCounter is set to 3 for demostration purposes.
```
 if (localStorage.getItem('localStCounter') !== null){
    let newCounter = localStorage.getItem('localStCounter');
    newCounter ++;
    localStorage.setItem('localStCounter', newCounter);
    if (newCounter === 3){
        clearInterval(localStorage.getItem('localStInterval'));
        localStorage.clear();
    }
}
```

## Implementation Timeline
#### Preparation (12/6/2020) -0 Day, Sunday
* Ideas brainstorming
* UX/UI brainstorming
* API research
* Proposal

#### Project Architecture (12/7/2020) -1 Day, Monday
* Project architecture
* Libraries research
* Main page basic layout

#### Football API (12/8/2020) -1 Day, Tuesday
* Get API key and make requests
* Display some data from API request

#### Football API (12/10/2020) -2 Days, Wednsesday, Thursday
* Get API key and make requests
* Display some data from API request
* Research and implement basic of D3.js to display data

#### Final (12/11/2020) -1 Day, Friday
* Wrap up the project.
* Clear and smooth navigation
* Styling
* Readme 

