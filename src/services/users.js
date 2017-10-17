import axios from 'axios';

export const getUser = function() {
	return axios.get("http://localhost:4000/api/getUser").then(res => res.data)
}
