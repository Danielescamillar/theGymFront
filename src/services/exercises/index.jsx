import axios from 'axios';

export const getExercises = async() =>{
    try {
        const response = await axios.get('http://localhost:3002/api/exercise/');
        return response.data
    } catch (error) {
        console.error('Error getting exercises:', error.message);
    }
}

export const addExercises = async({name, muscularZone, description}) =>{
    try {
        
        const response = await axios.post('http://localhost:3002/api/exercise/', {name, muscularZone, description});
        return response.data
    } catch (error) {
        console.error('Error getting exercises:', error.message);
    }
}



