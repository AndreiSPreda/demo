import axios from "axios"

const API_URL = 'http://localhost:3001'

const fetchUsersApi = async () =>{

    const resp = await axios.get('${API_URL}/cars');
    return resp.data;

};

export {fetchUsersApi};
