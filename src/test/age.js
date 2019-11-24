export default function(state = [1,2,3],action){
    if(action.type === 'addAge'){
        return [...state,action.payload]
    }
    return state
}