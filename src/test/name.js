export default function(state = 'a',action){
    if(action.type === 'addName'){
        return state + action.payload
    }
    return state
}