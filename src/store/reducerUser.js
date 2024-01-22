import * as Actions from './action'

const initalseState = {
    user: null,
}

const ReducerUser = (state = initalseState, action) => {
    switch (action.type) {
        case Actions.SET_USER:
            return { ...state, user: action.user}
        default: return { ...state }
    }
}
export default ReducerUser;