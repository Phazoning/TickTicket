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

import { baseURL } from "../src/consts";
import mock from "../src/mock_data";

/**
 * All these functions are to be changed to use the API on the last stage of development
 */
export  function getUser(user, password){
    
    let partialURL = "/users/?"

    let nameParameter = "username=" + user
    let pwdParameter = "&password=" + password

    return (dispatch) => {
        fetch(baseURL + partialURL + nameParameter + pwdParameter, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: GET_USER, data: json})
        })
    }
}   


export function getArticles(){

    let partialURL = "/knowledge/"

    return (dispatch) => {
        fetch(baseURL + partialURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: GET_ARTICLES, data: json})
        })
    } 
}

export function getIncidents(status){

    let partialURL = "/incidents/?status=" + status


    return (dispatch) => {
        fetch(baseURL + partialURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: GET_INCIDENTS, data: json})
        })
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

export function alterIncident(alterBody){

    let partialURL = "/incidents/alter/"
    let rBody = JSON.stringify(alterBody)

    fetch(baseURL + partialURL, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: rBody
    }).then(response => {
        return response.json()
    }).then(json => {
        console.log(json)
    })

    return (dispatch) => {dispatch({type: ALTER_INCIDENT, data: null})}
}

export function getUserFromAuthUser(authUser, targetUser) {
   
    let partialURL = "/users/detail/?"

    let masterUser = "master=" + authUser.user
    let masterPwd = "&masterpwd=" + authUser.pass
    let detailUser = "&detail_user=" + targetUser

    return (dispatch) => {
        fetch(baseURL + partialURL + masterUser + masterPwd + detailUser, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({type: GET_USERS_FROM_AUTHUSER, data: json})
        })
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