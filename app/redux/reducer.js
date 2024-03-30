import {combineReducers} from 'redux';

import GET_USER from "./actions";
import GET_INCIDENTS from "./actions";
import GET_ARTICLES from "./actions";
import ALTER_INCIDENT from "./actions";
import USER_IS_LOGGED from "./actions";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER: {
            state = Object.assign({}, state, {
                user: action.data,
            });
            return state;
        }
        case GET_INCIDENTS: {
            state = Object.assign({}, state, {
                incidents: action.data,
            });
            return state;
        }
        case GET_ARTICLES: {
            state = Object.assign({}, state, {
                articles: action.data,
            });
            return state;
        }
        default:
            return state
    }
};

const initialState = {
    user: null,
    articles: [],
    incidents: []
};

const rootReducer = combineReducers({
    reducer,
  });
  
  export default rootReducer;