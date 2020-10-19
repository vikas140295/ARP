import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, DELETE_ORDER, CONFIRM_ORDER } from '../actions/types';
const GET_ITEMS_FROM_LOCAL_STORAGE = ()=> {
    return JSON.parse(localStorage.getItem('items'))
}
const initialState = {
    items: GET_ITEMS_FROM_LOCAL_STORAGE() || [],

}

export default function (state = initialState, action) {
    let items;
    let newState;
    switch (action.type) {
        //nhan duoc type,change state base on type
        case ADD_ITEM:
            // console.log(action.payload);
            const findItem = state.items.find(i => i.id == action.payload.id);
            // console.log(findItem);
            
            if (!findItem) {
                action.payload.quantity = 1;
                const newState = {  ...state,
                    items: [...state.items, action.payload] //sau do se thay doi data trong store (initialState)}
                }
                SAVE_DATA_TO_LOCAL_STORAGE(newState)
                return newState
            } else {
                const newState = state.items.map(i => {
                    if(i.id==action.payload.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                });
                SAVE_DATA_TO_LOCAL_STORAGE({items: newState})
                return {
                    items: newState
                }
            }



        case INCREASE_ITEM:
            
            items  = state.items.map((item) => {
                if(item.id === action.payload){
                    item.quantity += 1;
                }
                
                return item;
            })
            newState = {  ...state,
                items
            }
            SAVE_DATA_TO_LOCAL_STORAGE(newState)
            return  newState
            

        case DECREASE_ITEM:
             items  = state.items.map((item) => {
                if (item.id === action.payload){
                    if (item.quantity > 0){
                        item.quantity -= 1;
                    } 
                }
                
                return item;
            })
            newState = {  ...state,
                items
            }
            SAVE_DATA_TO_LOCAL_STORAGE(newState)
            return  newState
            

        case REMOVE_ITEM:
            items = state.items.filter(item => item.id != action.payload)
            console.log(items, 'remove item reducer');
            
            newState = {  ...state,
                items
            }
            SAVE_DATA_TO_LOCAL_STORAGE(newState)

            return newState

        case DELETE_ORDER:
            return {

            }

        case CONFIRM_ORDER:
            return {

            }
        default:
            return state;
    }
}

const SAVE_DATA_TO_LOCAL_STORAGE = (state)=> {

        localStorage.setItem('items', JSON.stringify(state.items))

}