import {
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_CANCELED,

    CHANGE_ITEM_REQUEST,
    CHANGE_ITEM_SUCCESS,
    CHANGE_ITEM_CANCELED,

    DELETE_ITEM
} from '../constants/main';

import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    addNewItem: false,
    changeItem: false,
    idItemSelected: '',
    mainArr: []
};

export default function main(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.main;
            if (incoming) return {...state, ...incoming };
            return state;
        case ADD_ITEM_REQUEST:
            return { ...state, addNewItem: true };
        case ADD_ITEM_SUCCESS:
            action.item.id = action.id;
            action.item.date = action.date;
            let newItem =  state.mainArr.concat(action.item);
            return { ...state, addNewItem: false, mainArr: newItem };
        case ADD_ITEM_CANCELED:
            return { ...state, addNewItem: false };
        default:
            return state;
    }
}