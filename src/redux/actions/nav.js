import ActionsType from './type'

export const navigator = (type, value = '')=> {
    return {
        type: type,
        value
    }
}

export const goToProfile = (value) => {
    return {
        type: ActionsType.NAV_PROFILE,
        value
    }
}

export const goToLogin = (value) => {
    return {
        type: ActionsType.NAV_LOGIN,
        value
    }
}

export const goToLogout = (value) => {
    return {
        type: ActionsType.NAV_LOGOUT,
        value
    }
}