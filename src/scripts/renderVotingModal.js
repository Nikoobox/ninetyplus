import renderVotingStat from './renderVotingStat';

const renderVotingModal = (allGamesBoxDiv, t1ref, t2ref) => {
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML =
        `
        <div id="myVotingModal" class="modal-v">
            <div class="modal-v-content">
                <span class="close-v">&times;</span>
                <div id='modal-v-box'>
                </div>
            </div>
        </div>
        `
    allGamesBoxDiv.appendChild(modalDiv);

    const modalV = document.querySelector("#myVotingModal");
    const spanV = document.getElementsByClassName("close-v")[0];
    const votingBtns = document.querySelectorAll(".voting-btn");
    
    votingBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            auth.signInAnonymously();
            modalV.style.display = "block";
          
            // console.log('HI FROM VOTING MODAL')
            const name1 = btn.getAttribute('team1-name');
            const name2 = btn.getAttribute('team2-name');
            const logo1 = btn.getAttribute('team1-logo');
            const logo2 = btn.getAttribute('team2-logo');
            const gId = btn.getAttribute('gameId');

            if (t1ref === btn.getAttribute('team1-name')){
                renderVotingStat(name1, name2, logo1, logo2, gId);

            }
        });
    })

    spanV.onclick = () => {
        modalV.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modalV) {
            auth.signout();
            modalV.style.display = "none";
        }
    }
}

export default renderVotingModal;