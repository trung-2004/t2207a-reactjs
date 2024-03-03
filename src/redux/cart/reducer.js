import CART from "./initState";
import CART_ACTION from "./action";
const cartReducers = (state = CART, action)=>{
    switch(action.type){
        case CART_ACTION.UPDATE_CART: 
            return {...state,items:action.payload.items,total:action.payload.total};
        case CART_ACTION.CLEAR_CART:
            return {...state,items:[],total:0};
        default: return state;        
    }
}
export default cartReducers;