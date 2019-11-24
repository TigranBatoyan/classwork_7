export const  changeName = () => {
    return ({type:'addName',payload:'a'})
}

export const changeAge = () => dispatch => {
        dispatch({type:'addAge',payload:1})
}