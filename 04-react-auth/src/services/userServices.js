import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const registerUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUser = (data) => axios.post(`${BASE_URL}/login`, data)

export { registerUser, loginUser }
