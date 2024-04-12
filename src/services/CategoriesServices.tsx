import axios from 'axios'

const baseUrlServices = 'http://localhost:3000/services'
const baseUrlSlots = 'http://localhost:3000/slots'

const getAll = () =>{
    const request = axios.get(baseUrlServices)
    return request.then(response => response.data)
}

const getAllSlots = () =>{
    const request = axios.get(baseUrlSlots)
    console.log(request.then(response  => response.data));
    
    return request.then(response => response.data)
}

export default {getAll,getAllSlots}