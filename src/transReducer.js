//print kraanay ka zimedaar
const TransactionReducer = ((state, action)=>{
    
    switch(action.type){
        case "DELETE":{
            let filtered  = [...state]
            filtered.splice([action.payload],1)
            return filtered;
        }
        case "ADD":{
            return [action.payload,...state]
        }
        default:
            return state;
    }
})
export default TransactionReducer;