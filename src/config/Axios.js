import axios from 'axios';
const instances = {
    api: axios.create({
        baseURL:
            'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api'
    })
};

export const { api } = instances;
export default instances;
