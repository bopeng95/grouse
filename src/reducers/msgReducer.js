import types from './../actions/actionTypes';

const initialState = {
    msg: []
}

const msgReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TEXT_AND_TAGS:
            const m = state.slice();
            m.push(action.payload);
            return { ...state, m }
        default:
            return state;
    }
}

export default msgReducer;