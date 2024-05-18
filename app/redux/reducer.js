import {combineReducers} from 'redux';

import {
    GET_USER, 
    GET_INCIDENTS,
    GET_ARTICLES,
    ALTER_INCIDENT,
    USER_IS_LOGGED,
    SET_INCIDENT_FOR_DETAIL,
    CLEANSE_INCIDENT_DETAIL,
    REFRESH_INCIDENT_DETAIL,
    GET_USERS_FROM_AUTHUSER,
    CLEANSE_USER_DETAIL
} from "./actions";

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
        case SET_INCIDENT_FOR_DETAIL: {
            state = Object.assign({}, state, {
                incidentDetail: action.data,
            });
            return state;
        }

        case CLEANSE_INCIDENT_DETAIL: {
            state = Object.assign({}, state, {
                incidentDetail: action.data,
            });
            return state;
        }
        case REFRESH_INCIDENT_DETAIL: {
            state = Object.assign({}, state, {
                incidentDetail: action.data,
            });
            return state;
        }
        case GET_USERS_FROM_AUTHUSER: {
            state = Object.assign({}, state, {
                userDetail: action.data,
            });
            return state;
        }
        case CLEANSE_USER_DETAIL: {
            state = Object.assign({}, state, {
                userDetail: action.data,
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
    incidents: [],
    incidentDetail: null,
    userDetail: null
};

const rootReducer = combineReducers({
    reducer,
  });
  
  export default rootReducer;