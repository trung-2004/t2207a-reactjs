import { combineReducers } from "redux";
import cartReducers from "./cart/reducer";
import favouriteReducers from "./favourite/reducer";

const rootReducers = combineReducers({
    cartReducers,favouriteReducers
})
export default rootReducers;