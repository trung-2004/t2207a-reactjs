import FAV from "./initState";
import FAV_ACTION from "./action";
const favouriteReducers = (state = FAV, action)=>{
    switch(action.type){
        case FAV_ACTION.UPDATE_FAV: 
            return action.payload;

        case FAV_ACTION.CLEAR_FAV:
            return [];
        default: return state;        
    }
}
export default favouriteReducers;