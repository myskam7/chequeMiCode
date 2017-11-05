import React, { Component } from 'react'
import {View, Text, StyleSheet, StatusBar } from 'react-native'

class Header extends Component{

    // componentDidMount(){
    //     alert(JSON.stringify(this.props.prop))
    // }

    render(){
        return(
            <View style={styles.topNav}>
                <StatusBar backgroundColor="blue" barStyle="dark-content"/>
                 <Text style={styles.text}>{this.props.prop}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topNav: {
        backgroundColor: "coral",
        position: "absolute",
        paddingTop: 40,
        paddingBottom: 20,
        top: 0,
        width: 100 + '%'
    },
    text: {
        fontSize: 16,
        alignSelf: 'center'
        
    }
   
})
export default Header