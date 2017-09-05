import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

const ProfileScreen = (props)=> {
    // console.log(props)
    const {user} = props.navigation.state.params;
    return(
        <View>
            <Text>ProfileScreen</Text>
            <Text>User: {JSON.stringify(user)}</Text> 
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)