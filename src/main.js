import React, {Component} from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './redux/store/reducers';
import AppWithNavigationState from './navigators';

export default class App extends Component {
    
    store = createStore(AppReducer)

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}