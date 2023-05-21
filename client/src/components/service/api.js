import axios from 'axios';

const url = 'http://localhost:8000';
export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);    //axios.post(backend url,body)
    } catch (error) {
        console.log("Error while add user api", error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error while fetching users", error);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log("Error while fetching setConversation api ", error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log("Error while fetching getConversation api ", error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while fetching newMessage api ", error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while fetching getMessage api ", error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log("Error while fetching upload file api ", error);
    }
}


