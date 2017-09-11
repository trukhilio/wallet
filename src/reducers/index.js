import { combineReducers } from 'redux';
import main from './main';
import cat from './cat';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    main,
    cat,
    form: formReducer
});