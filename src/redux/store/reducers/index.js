import {combineReducers} from 'redux'

import NavReducer from './navigator'
import UserReducer from './user'

const AppReducer = combineReducers({
    nav: NavReducer,
    user: UserReducer
});

export default AppReducer