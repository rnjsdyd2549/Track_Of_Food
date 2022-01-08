import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Access-Control-Allow-Origin': true,
    },
});

export async function foodApi(query) {
    const res = await api.get(`/api/food?food_name=${query}`)
    return res
}

export async function trackApi(walk_dist, jog_dist, need_more_work, user_lng, user_lat) {
    const res = await api.get(`/api/track?walk_dist=${walk_dist}&jog_dist=${jog_dist}&need_more_work=${need_more_work}&user_lng=${user_lng}&user_lat=${user_lat}`)
    return res
}

export default api;