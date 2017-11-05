import React, { Component } from 'react'
import {View, StyleSheet, Text } from 'react-native'
import { Header } from '../presentation'

class Home extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <Header prop={"All Messages"}/>
                <Text style={styles.welcome}>
                     Welcome to cheque MiCode!
                </Text>
             </View>
          
          )
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center', 
          justifyContent: 'center'
        },
        welcome: {
          fontSize: 20,
          margin: 10,
          alignItems: 'center'
        }
      });

      export default Home