import {REHYDRATE} from 'redux-persist/constants';
import {
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_CANCELED,

    CHANGE_CATEGORY_REQUEST,
    CHANGE_CATEGORY_SUCCESS,
    CHANGE_CATEGORY_CANCELED,

    DELETE_CATEGORY
} from '../constants/category';

const initialState = {
    addNew: false,
    changer: false,
    categoryArr: []
};

export default function cat(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.cat;
            if (incoming) return {...state, ...incoming };
            return state;
        case ADD_CATEGORY_REQUEST:
            return { ...state, addNew: true };
        case ADD_CATEGORY_SUCCESS:
            action.item.id = action.id;
            let newItem =  state.categoryArr.concat(action.item);
            return { ...state, addNew: false, categoryArr: newItem };
        case ADD_CATEGORY_CANCELED:
            return { ...state, addNew: false };
        default:
            return state;
    }
}
