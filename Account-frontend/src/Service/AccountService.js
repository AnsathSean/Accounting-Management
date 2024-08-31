import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/accounts"

export const getAllAccounts = () => axios.get(BASE_REST_API_URL);

export const addAccount = (account) => axios.post(BASE_REST_API_URL,account);