
const renderVotingStat = (name1, name2, logo1, logo2, gameId) => {

    const modalVBox = document.getElementById("modal-v-box");
    modalVBox.innerHTML = `
        <div class='teams-row'>
            <div class='btn-box'>
                <button id='voteNum' name='name1'>${name1}</button>
            </div>
            <div class='message'> Who will win? </div>
            <div class='btn-box'>
                <button id='voteNum' name='name2'>${name2}</button>
            </div>
        </div>
        <div class='voting-box'>
            <div class='voting-box'>
            </div>
        </div>
    `;

    const voteData = document.getElementById("voteNum");
    let val1 = 0;
    let val2 = 0;

    voteData.addEventListener('click', (e)=>{
        console.log(e)
        if (e.currentTarget.name === 'name1'){
            getData(++val1, 1)
            
        } else {
        }
    })

    let data = {};

    // const trackDataChanges = () => {
    //     db.collection('game-winner').onSnapshot(res => {
    
    //         res.docChanges().forEach(change=>{
    //             const doc = {...change.doc.data(), id: change.doc.id};
    //             console.log(doc);
    //             switch(change.type){
    //                 case 'added':
    //                     // console.log
    //                     data = doc;
    //                 break;
    //                 case 'modified':
    //                     data = doc;
    //                 break;
    //                 default: 
    //                 break;
    //             }
    //         })
    
    //     })
    // }
    
    const writeData = (val, num) => {
        // if (num === 1){
        //     db.collection('game-winner').doc('team1Votes').update({
        //         team1Votes: val
        //     })
        // }
    }

    const getData = (num) => {
        let data = {};
        db.collection('game-winner').get().then((res)=>{
            console.log(res.docs[0].data());
            data = res.docs[0].data();
            
            for(let ele in data){
                console.log(data[ele])
                if (ele === 'team1Votes'){
                    writeData(data[ele], 1)
                }else{
                    writeData(data[ele], 2)
                }
            }

           
        }).catch((err)=>{
            console.log(err)
        });
    }

};

export default renderVotingStat;