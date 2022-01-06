import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.REACT_APP_RESULT_API_HOST,
    headers: { "Content-Type": "application/json" },
});

const api = {};

api.getFoods = async({ foodName }) => {
    const res = await axios.get("/food", {
        params: { foodName }
    });
    if (Array.isArray(res?.data)) {
        return res.data;
    }
    throw new Error(res?.data?.ERROR_REASON || "");
};

api.getTrails = async({ trailName }) => {
    const res = await axios.get("/trail", {
        params: { trailName }
    });
    if (Array.isArray(res?.data)) {
        return res.data;
    }
    throw new Error(res?.data?.ERROR_REASON || "");
};

api.getFoods();
api.getTrails();

export default api;
