import axios from "axios";
import { getBackendUrl } from "../config";

console.log('getBackendUrl()', getBackendUrl());
const api = axios.create({
	baseURL: getBackendUrl(),
	withCredentials: true,
});

export default api;
