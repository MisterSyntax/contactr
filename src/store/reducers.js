/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

//TODO: Remove/Replace Sample reducer
export const enable = (state = false, action) => {
    switch (action.type) {
        case C.ENABLE: {
            return true
        }
        case C.DISABLE: {
            return false
        }
        default:{
            return state
        }
    }
}

export const contacts = (state = [], action) => {
    switch(action.type){
        case C.ADD_USER: {
            return [...state, action.payload]
        }
        case C.REMOVE_USER: {
            return state.filter(curr=>curr.id !== action.payload)
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    enable,
    contacts
});