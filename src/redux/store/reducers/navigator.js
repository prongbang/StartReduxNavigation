import {NavigationActions} from 'react-navigation'
import AppNavigator from '../../../navigators/nav'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const initialState = AppNavigator.router.getStateForAction(firstAction)

const NavReducer = (state = initialState, action) => {
  let nextState;
  // console.log(state, action)
  switch(action.type) {
      case 'Login':
          nextState= AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Login' }), 
            state
          );
        break;
      case 'Logout':
          nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Login' }),
            state
          );
        break;
      case 'Profile':
          nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Profile', params: {user: action.value}}),
            state
          );
      break;
      default:
          nextState= AppNavigator.router.getStateForAction(action, state);
        break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default NavReducer;