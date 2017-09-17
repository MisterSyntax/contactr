/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const enableContent = () => {
    return {
        type: C.ENABLE
    }
}

export const disableContent = () => {
    return {
        type: C.DISABLE
    }
}

export const addUser = user => {
    let date = new Date();
    let id = date.getTime();
    user.id = id;
    return {
        type: C.ADD_USER,
        payload: user
    }
}

export const removeUser = id => {
    return {
        type: C.REMOVE_USER,
        payload: id
    }
}