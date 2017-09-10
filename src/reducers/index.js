import { combineReducers } from 'redux';
import main from './main';
import category from './category';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    main,
    category,
    form: formReducer
});