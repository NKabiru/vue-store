import m from 'mithril';
import { apiKey } from "./config";

const baseUrl = 'https://www.giantbomb.com/api'

var games = [];

function getGames() {
    m.jsonp({
        url: `${ baseUrl }/games/`,
        data: {
            api_key: apiKey,
            format: 'jsonp',
            field_list: 'name,deck,image,id',
            filter:'id:59203|52647|58573'
        },
        callbackKey: 'json_callback'
    }).then(game => {
        games = game.results
        return games;
    })
}



export { baseUrl, getGames }