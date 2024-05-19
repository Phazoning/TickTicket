export const GET_USER = "GET_USER";
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_INCIDENTS = "GET_INCIDENTS";
export const ALTER_INCIDENT = "ALTER_INCIDENT";
export const USER_IS_LOGGED = "USER_IS_LOGGED";
export const SET_INCIDENT_FOR_DETAIL = "SET_INCIDENT_FOR_DETAIL"; 
export const CLEANSE_INCIDENT_DETAIL = "CLEANSE_INCIDENT_DETAIL";
export const REFRESH_INCIDENT_DETAIL = "REFRESH_INCIDENT_DETAIL";
export const GET_USERS_FROM_AUTHUSER = "GET_USERS_FROM_AUTHUSER";
export const CLEANSE_USER_DETAIL = "CLEANSE_USER_DETAIL"; 

import mock from "../src/mock_data";
import storage from "../storage/storage";

/**
 * All these functions are to be changed to use the API on the last stage of development
 */
export  function getUser(user, password){
    let returnUser = null
    for (e in mock.users) {
        let isUser = mock.users[e].user == user
        let isPass = mock.users[e].pass == password
        if ( isUser && isPass) {
            returnUser = mock.users[e]
        }
    }

    return (dispatch) => {
        dispatch({type: GET_USER, data: returnUser})
    }
}


export function getArticles(){
    let returnArray = []
    returnArray = mock.articles
    return (dispatch) => {
        dispatch({type: GET_ARTICLES, data: returnArray})
    }
}

export function getIncidents(status){
    let returnArray = []
    for (e in mock.incidents){
        let incidentStatus = mock.incidents[e].status
        if (incidentStatus == status){
            returnArray.push(mock.incidents[e])
        }
    }
    
    return (dispatch) => {
        dispatch({type: GET_INCIDENTS, data: returnArray})
    }   
}

export function setIncidentForDetail(item){
    return (dispatch) => {
        dispatch({type: SET_INCIDENT_FOR_DETAIL, data: item})
    }
}

export function cleanseIncidentDetail(){
    return (dispatch) => {
        dispatch({type: CLEANSE_INCIDENT_DETAIL, data: []})
    }
}

/** 
 * Implement with the API implementation, as changes won't be able to be done before that
*/
export function alterIncident(alterBody){
}

export function refreshIncidentDetail(incidentId){

    let item = null

    for (e in mock.incidents){
        let elementId = mock.incidents[e].incident
        if (elementId == incidentId){
            item = mock.incidents[e]
        }
    }
    return (dispatch) => {
        dispatch({type: REFRESH_INCIDENT_DETAIL, data: item})
    }
}

export function getUserFromAuthUser(authUser, targetUser) {
    let returnUser = null
    if (authUser != null) {
        for (e in mock.users) {
            if (mock.users[e].user === targetUser) {
                returnUser = mock.users[e]
            }
        }
    }

    return (dispatch) => {
        dispatch({type: GET_USERS_FROM_AUTHUSER, data: returnUser})
    }
}

export function cleanseUserDetail(){
    return (dispatch) => {
        dispatch({type: CLEANSE_USER_DETAIL, data: null})
    }
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