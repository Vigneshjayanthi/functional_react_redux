import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {INCREMENT, DECREMENT, GETPOST} from './Counter/Actiontype';
import thunk from 'redux-thunk';


const initialState ={
  count:0,
  uservalue:[]
}
 function reducer(state =initialState, action){
   console.log(state, " ", action)
   switch(action.type){
     case INCREMENT:
        return{ ...state,count:state.count+1}
     case DECREMENT:
       return{...state,count:state.count-1}
      case GETPOST:
        return{...state,uservalue:action.user}
      default:
        return state;
     
   }

 }

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
