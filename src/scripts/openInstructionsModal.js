const openInstructionsModal = () => {
    
    const navDiv = document.querySelector('.div-for-modal');
    const instrBtn = document.getElementById('instructions-link');
    console.log(instrBtn, navDiv);
    
    
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML =
    `
    <div id="myModalInst" class="modalInst">
        <div class="modal-content">
            <span class="closeInt">&times;</span>
            
            <div id='modal-box-inst'>
                <div class='about-title'>ABOUT</div>
                <div class='about'>
                    90Plus is a soccer score app for the English Premier League. This app brings you the fixtures with live updates, game stats, game winner voting options and more.
                </div>

                <div class='inst-title'>INSTRUCTIONS</div>
                <div class='inst'>
                    <ul>
                        <li>CURRENT matchday games are displayed on the main page (ex. ALL GAMES - ROUND 17).
                        </li>  
                        <li>OLDER game info could be accessed from the top navigation bar when clicking on pink button (ex. <span><< GO TO ROUND 16</span>)</li>
                        <li>Similarly, FUTURE game info could be accessed from the top navigation bar (ex. <span>GO TO ROUND 18 >></span>).</li>
                        <li>The user can click on LIVE or FINISHED fixtures to see detailed statistics. A player’s stats are available when hovering over any player on the pitch. Try it!</li>
                        <li>The user can vote for the game WINNER by clicking on the VOTE button. This feature is available only for future games.</li>    
                        <li>Live updates can be manually turned on by selecting <span>ACTIVATE LIVE UPDATES</span>. When selected, the page will refresh 3 times every 10 seconds for demonstration purposes. Live updates can be turned off by selecting <span>STOP LIVE UPDATES</span>.</li>      
                    <ul>   
                </div>

                
                <div class='built-by'>
                    Built by <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target="_blank">Nikolay Shatalov</a>
                </div>

            </div>
        
        </div>
    </div>
    `
    navDiv.appendChild(modalDiv);
    
    const modal = document.querySelector("#myModalInst");
    const span = document.getElementsByClassName("closeInt")[0];

    instrBtn.addEventListener('click', ()=>{
        modal.style.display = "block";
        

    })

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export default openInstructionsModal;