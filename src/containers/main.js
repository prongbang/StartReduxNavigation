import React from 'react'
import {View, Text, Button} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

// #1
import * as actionsCreator from '../redux/actions'
import ActionsType from '../redux/actions/type'

// #1
const MainScreen = ({navigation, navigator, goToProfile}) => {
    return (
        <View>
            {/* this.props.navigation */} 
            {/* this.props.navigator */} 
            {/* this.props.goToProfile */} 
            <Text>MainScreen</Text>
            <Button title={"Go to Profile"} onPress={()=> goToProfile({id:1, name:'M'})}/> 
            <View style={{padding:10}}></View>
            <Button title={"Go to Login"} onPress={()=>navigator(ActionsType.NAV_LOGIN, {})}/> 
        </View>
    )
}

// #1
const mapDispatchToProps = dispatch => bindActionCreators(actionsCreator, dispatch)

const mapStateToProps = state => ({
    
});

// #2
// const MainScreen = ({login, profileScreen}) => (
//     <View>
//         <Text>MainScreen</Text>
//         <Button title={"Go to Profile"} onPress={profileScreen}/> 
//         <Button title={"Go to Login"} onPress={login}/> 
//         {/* this.props.profileScreen */} 
//     </View>
// )
//
// const mapDispatchToProps = dispatch => ({
//     login: () => dispatch({type: 'Login'}), // check in nav reducer
//     profileScreen: () => dispatch(NavigationActions.navigate({routeName: 'Profile'}))
// });

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);