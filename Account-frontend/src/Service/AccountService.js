import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/accounts"

export const getAllAccounts = () => axios.get(BASE_REST_API_URL);

export const getAllCategories = ()=>axios.get(BASE_REST_API_URL+'/categories')

export const getAccountsByCategory = (category)=>axios.get(BASE_REST_API_URL+'/category/'+category)

export const getAccountsByWeek = (year,week)=>axios.get(BASE_REST_API_URL+'/weekly/'+year+"/"+week)

export const addAccount = (account) => axios.post(BASE_REST_API_URL,account);

export const getAccount = (id) => axios.get(BASE_REST_API_URL+'/'+id);

export const updateAccount = (id,todo) => axios.put(BASE_REST_API_URL+'/'+id,todo);

export const deleteAccount = (id)=>axios.delete(BASE_REST_API_URL+'/'+id);