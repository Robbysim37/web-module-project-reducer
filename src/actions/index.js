export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_MEMORY = "SET_MEMORY"
export const APPLY_MEMORY = "APPLY_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearTotal = () => {
    return({type:CLEAR_DISPLAY})
}

export const setMemory = (total) => {
    return({type:SET_MEMORY, payload:total})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}
