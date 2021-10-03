import { combineReducers } from "redux";

import orderListReducer from "./redux/orders/order-list";

// COMBINED REDUCERS
const reducers = {
    orderListReducer,
};

export default combineReducers(reducers);
