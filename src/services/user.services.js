import axios from 'axios'

const BASE_URL = 'http://localhost:3000';

const getAllUsers = async () => {
    try{
        const res = await axios.get(`${BASE_URL}/user/getAll`);
        console.log(res);
        if(res.status === 200){
            return res.data
        }
    }
    catch(err){
        return {
            err
        }
    }
}

const saveImage = async (formData) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    try{
        
        const res = await axios.post(`${BASE_URL}/imageUpload`, formData, config); 
        return res.data;
    }
    catch(err) {
        return err;
    }
}

const addUser = async (userData) => {
    console.log("userdata????????????????" , userData);
    try{
        const res = await axios.post(`${BASE_URL}/auth/register`, userData); 
        return res.data;
    }
    catch(err){
        return err;
    }
}

const deleteUser = async (id) => {
    try{
        const res = await axios.delete(`${BASE_URL}/user/${id}/delete`);
        return res.data;
    }
    catch(err) {
        return err;
    }
}

export default {getAllUsers, addUser, saveImage, deleteUser};