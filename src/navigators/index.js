import React from 'react'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux';
import AppNavigator from './nav'

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = (state) => ({nav: state.nav});

export default connect(mapStateToProps)(AppWithNavigationState);