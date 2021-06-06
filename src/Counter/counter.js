import React,{useEffect} from 'react';
import {INCREMENT, DECREMENT, increment_type} from './Actiontype';
import {useSelector, useDispatch} from 'react-redux';

export default function Counter (){
    const count = useSelector((state)=> state.count);
    const userpost = useSelector(state => state.uservalue)
    const dispatch = useDispatch();

    const increment =()=>{
        dispatch({type:INCREMENT})
        
    }
    const decrement =()=>{
        dispatch({type:DECREMENT})
    }
    useEffect(()=>{
        dispatch(increment_type())

    },[dispatch])

    return (<div>
        helloWorld
        <div>
            <button onClick={increment}> +</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
        </div>
        <div>
            <ol>
                {userpost.map(value =>{
                    return <li key={value.id}>{value.title}</li>
                })}
            </ol>


        </div>
        </div>)
}