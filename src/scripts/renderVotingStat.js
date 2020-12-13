import axios from "axios";
// import renderGameById from './game';

const renderVotingStat = (name1, name2, logo1, logo2, gameId) => {
    // console.log('hi from  RENDER Voting STAT');
    // console.log(name1, name2, logo1, logo2, gameId)

    const modalVBox = document.getElementById("modal-v-box");
    modalVBox.innerHTML = `
    ${name1} vs ${name2} : Vote for the winner! (work in progress ...)
    `

};

export default renderVotingStat;