import Axios from "axios";

export const api = Axios.create({
	baseURL: "https://to-do-app-rocket.herokuapp.com/api/",
	// baseURL: 'http://localhost:3001/api/' - for dev
});
