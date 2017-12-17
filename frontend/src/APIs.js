import axios from 'axios';
import {URL} from './config';

export function APITest(query, API) {
    return axios.get(URL + API, {
        params: {
            query: query
        }
    }).then(response => {
        return response.data;
    })
}
