import {ENDPOINTS} from '../constants/endpoint';
import axios from 'axios';

export const getPing = () => {
    axios.get(ENDPOINTS.PING)
    .then(res => {
        console.log('res', res);
    })
    .catch(err => {
        console.log('error', err);
    });
};

export const getCoinsMarkets = (params) => {
// ?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
    return axios.get(ENDPOINTS.COINS_MARKETS, {params})
    .then(res => {
        return res
    })
    .catch(err => {
        console.log('error', err);
    })
};

export const getCategoryList = () => {
    // ?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
        return axios.get(ENDPOINTS.CATEGORY_LIST)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log('error', err);
        })
    };

    export const getCoinDetail = (id) => {
        // ?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
            return axios.get(`${ENDPOINTS.COIN_DETAIL}/${id}?localization=false`)
            .then(res => {
                return res
            })
            .catch(err => {
                console.log('error', err);
            })
        };