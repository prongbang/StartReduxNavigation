import ActionsType from '../../actions/type'

let initialState = {

}

const UserReducer = (state = initialState, action) => {
    let nextState;
    switch(action.type) {
        case ActionsType.PROFILE_UPDATE:
            return {
                ...state,
                ...action.value
            }
        break
        default:
            return state

    }
}

export default UserReducer