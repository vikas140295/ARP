import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, DELETE_ORDER, CONFIRM_ORDER } from './types';
import axios from 'axios';

export const addItem = (item) => dispatch => {
    console.log("adding item",item)
    //dispatch type and data -> reducer

        dispatch({
            type: ADD_ITEM, //key
            payload: item //value
        });
}

export const increaseItem = (id) => dispatch => {
    console.log("increase item",id)
    //dispatch type and data -> reducer

        dispatch({
            type: INCREASE_ITEM, //key
            payload: id //value
        });
}

export const decreaseItem = (id) => dispatch => {
    console.log("decrease item",id)
    //dispatch type and data -> reducer

        dispatch({
            type: DECREASE_ITEM, //key
            payload: id //value
        });
}

export const removeItem = (id) => dispatch => {
    console.log("remove item",id)
    //dispatch type and data -> reducer

        dispatch({
            type: REMOVE_ITEM, //key
            payload: id //value
        });
}


