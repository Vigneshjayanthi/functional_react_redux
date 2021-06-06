import axios from 'axios';
export const INCREMENT =' INCREMENT';
export const DECREMENT =' DECREMENT';
export const GETPOST= 'GETPOST';



export const increment_type = () =>{
    return dispatch =>{ 
       axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>dispatch({type:GETPOST,user:res.data}))
    }
}