import { orderList_findMany } from "./order-list.actions";

const initialState = {
    orders: [],
};

export default function orderListReducer(state = initialState, action) {
    switch (action.type) {
    case orderList_findMany.toString():
        return {
            ...state,
        };
    default:
        return state;
    }
}
