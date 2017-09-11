import {
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_CANCELED,

    CHANGE_CATEGORY_REQUEST,
    CHANGE_CATEGORY_SUCCESS,
    CHANGE_CATEGORY_CANCELED,

    DELETE_CATEGORY
} from '../constants/category';

import { uuidv4 } from '../utility/index';

export function addCatRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CATEGORY_REQUEST
        });
    }
}
export function addCatSuccess(item, dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CATEGORY_SUCCESS,
            item,
            id: uuidv4()
        });
    }
}

export function cancelCatRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CATEGORY_CANCELED
        });
    }
}
