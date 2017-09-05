import ActionsType from './type'

export const updateProfile = (value) => {
    return {
        type: ActionsType.PROFILE_UPDATE,
        value 
    }
    // value: value
}