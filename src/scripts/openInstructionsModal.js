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
                    90Plus is a soccer live score app for the English Premier League. This app brings you the fixtures with live updates, game stats, game winner voting options and more.
                </div>

                <div class='inst-title'>INSTRUCTIONS</div>
                <div class='inst'>
                    <ul>
                        <li>CURRENT matchday games are displayed on the main page (ex. ALL GAMES - ROUND 17).
                        </li>  
                        <li>OLDER games info could be accessed from the top navigation bar when clicking on pink button (ex. <span><< GO TO ROUND 16</span>)</li>
                        <li>Similarly, FUTURE games info could be accessed from the top navigation bar (ex. <span>GO TO ROUND 18 >></span>).</li>
                        <li>User can click on LIVE or FINISHED fixtures to see detailed statistics. Players stats is available when hovering over any player on a pitch. Try it!</li>
                        <li>User can vote for the game WINNER by clicking on the VOTE button. This feature is available only for future games</li>    
                        <li>Live updates could be manually turn on by selecting <span>ACTIVATE LIVE UPDATES</span>. When selected, the page will be refreshed every 10 seconds for 3 times for demonstration purposes. Live updates could be turned off by selecting <span>STOP LIVE UPDATES</span></li>      
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