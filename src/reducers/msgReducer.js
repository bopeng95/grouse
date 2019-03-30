import types from './../actions/actionTypes';

const initialState = {
    msg: []
}

const msgReducer = (state = initialState, action) => {
    let msg;
    switch(action.type) {
        case types.ADD_TEXT_AND_TAGS:
            msg = state.msg.slice();
            m.push(action.payload);
            return { ...state, m };
        case types.GET_TEXT_AND_TAGS:
            msg = state.msg.slice();
            msg = action.payload;
            return { ...state, msg };
        default:
            return state;
    }
}

export default msgReducer;