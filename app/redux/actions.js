export const GET_USER = "GET_USER";
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_INCIDENTS = "GET_INCIDENTS";
export const ALTER_INCIDENT = "ALTER_INCIDENT";
export const USER_IS_LOGGED = "USER_IS_LOGGED";

import mock from "../src/mock_data";


/**
 * All these functions are to be changed to use the API on the last stage of development
 */
export  function getUser(user){
    let returnUser = null
    for (e in mock.users) {
        if (e.user === user) {
            returnUser = e
        }
    }
    dispatch({type: GET_USER, data: returnUser})
}

export function getArticles(){
    let returnArray = []
    returnArray = mock.articles
    dispatch({type: GET_ARTICLES, data: returnArray})
}

export function getIncidents(status){
    let returnArray = []
    for (e in mock.incidents){
        if (e.status === status){
            returnArray.push(e)
        }
    }
    dispatch({type: GET_INCIDENTS, data: returnArray})
}

/**
 * Implement once AsyncStorage has been fully implemented on the app
 */
export function userIsLogged(){

}

/** 
 * Implement with the API implementation, as changes won't be able to be done before that
*/
export function alterIncident(){

}

export function resetReduxState(type) {
    return (dispatch) => {
      switch (type) {
        case 'ERROR':
          dispatch({type: ERROR, data: null});
          break;
      }
    };
  }