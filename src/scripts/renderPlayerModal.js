import renderPlayerStat from './renderPlayerStat';

const renderPlayerModal = (squadsDiv, FixturePlayersStat, fixtureId) => {
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML =
        `
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>

                    <div id='modal-box'>
                        Some text goes here ...
                    </div>

                </div>
            </div>
        `
    squadsDiv.appendChild(modalDiv);

    const modal = document.querySelector("#myModal");
    const playersToClick = document.querySelectorAll(".pl-select");
    const span = document.getElementsByClassName("close")[0];

    playersToClick.forEach((player) => {
        player.addEventListener('click', () => {
            modal.style.display = "block";
            const playerId = player.getAttribute('playerId');
            const teamId = player.getAttribute('teamId');

            const playerIdm = parseInt(playerId);
            const teamIdm = parseInt(teamId);
            renderPlayerStat(playerIdm, teamIdm, fixtureId, FixturePlayersStat);
        });

    })

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export default renderPlayerModal;