import fetchData from "./fetchData";

const getFixturePlayersStat = (fixtureId) => {
    return fetchData(`./fixture_players_stat?fixtureId=${fixtureId}`).then((res) => {
        // console.log('Hi from fixture players stat!')
        // console.log(res.data.response);
        // console.log('end');
        return res.data.response;

    }).catch(err => {
        console.log(err)
    });
};

export default getFixturePlayersStat;