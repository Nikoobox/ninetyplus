
const renderVotingStat = (name1, name2, logo1, logo2, gameId) => {

    const modalVBox = document.getElementById("modal-v-box");
    modalVBox.innerHTML = `
        <div class='teams-row'>
            <div class='btn-box'>
                <button id='voteNum1' name='name1'>${name1}</button>
            </div>
            <div class='message'> Who will win? </div>
            <div class='btn-box'>
                <button id='voteNum2' name='name2'>${name2}</button>
            </div>
        </div>
        <div id='voting-box'>
            
        </div>
    `;

    const voteData1 = document.getElementById("voteNum1");
    const voteData2 = document.getElementById("voteNum2");

    voteData1.addEventListener('click', (e)=>{
        getData(1, 1, parseInt(gameId))
    })

    voteData2.addEventListener('click', (e) => {
        getData(1, 2, parseInt(gameId))
    })
    
    const addData = (data, vote1, vote2) => {
        console.log('ho from addData function');
        console.log(data);
        db.collection('winner-votes').add(data);
        renderVotes(vote1, vote2);
    }

    const renderVotes = (vote1, vote2)=>{
        console.log(vote1, vote2)
        const votingBoxDiv = document.getElementById("voting-box");
        votingBoxDiv.innerHTML =
            `
            <div class='voting-row'>
                <div class='votes1 vote'>${vote1}</div>
                <div class='votes2 vote'>${vote2}</div>
            </div>
        `;
    }

    const updateData = (data, keyId, vote1, vote2) => {
        console.log('ho from updateData function')
        console.log(data);
        db.collection('winner-votes').doc(keyId).update(data);
        renderVotes(vote1, vote2);
    }

    const getData = (val, num, gameId) => {
        db.collection('winner-votes').get().then((res)=>{
            let updated = false;
            res.docs.forEach(doc=>{
                // console.log(doc.data(), doc.id)
                // console.log(`${gameId}`);
                // DATA IS EXISTING IN DATABASE. CALL UPDATE
                if(parseInt(Object.keys(doc.data())[0]) === gameId){
                    let keyId = doc.id;
                    let votes = (doc.data()[gameId])
                    let vote1=0;
                    let vote2=0;
                    for(let vote in votes){
                        if (vote === 'team1'){
                            vote1 = votes[vote]
                        }else{
                            vote2 = votes[vote]
                        }
                    }
                    if (num === 1){
                        let newData = { [gameId]: { team1: (vote1 + val), team2: vote2} }
                        updateData(newData,keyId, vote1, vote2)
                        updated=true;
                    }else{
                        let newData = { [gameId]: { team1: vote1, team2: (vote2 + val) } }
                        updateData(newData, keyId, vote1, vote2);
                        updated = true;
                    }
                }
            })
            // DATA IS NEW. CALL ADD
            if (updated == false){
                let vote1 = 0;
                let vote2 = 0;
                if (num === 1) {
                    let newData = { [gameId]: { team1: (vote1 + val), team2: vote2 } }
                    addData(newData, vote1, vote2)
                } else {
                    let newData = { [gameId]: { team1: vote1, team2: (vote2 + val) } }
                    addData(newData, vote1, vote2)
                }
            }
        }).catch((err)=>{
            console.log(err)
        });
    }

};

export default renderVotingStat;