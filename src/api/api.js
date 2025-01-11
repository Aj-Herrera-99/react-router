import axios from "axios";

export const getIndex = async (apiUrl, config) => {
    try {
        const res = await axios.get(apiUrl, config);
        console.log(res)
        const data = await res.data;
        return data;
    } catch (err) {
        console.error(err.response.data);
    }
};

export const getShow = async (apiUrl, config) => {
    try {
        const res = await axios.get(apiUrl, config);
        console.log(res)
        const data = await res.data;
        return data;
    } catch (err) {
        console.error(err.response.data);
    }
};
