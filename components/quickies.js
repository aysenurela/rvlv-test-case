import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class Quickies extends React.Component {
    render() {
        return (
            <View style={styles.quickies}>
                <View style={styles.quickiesButton}>    
                    <TouchableOpacity>
                            <Text>...</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.quickiesText}>
                    Quickies In Progress
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quickies: {
        flex:1,
        backgroundColor: 'red',
        alignItems:'center',
        position:'absolute',
        bottom: -50,
        height: 130,
        alignSelf:'center',
        width:'100%',
        borderRadius:50
    },
    quickiesButton: {
        width: 30,
        height: 30,
        backgroundColor: 'pink',
        borderRadius:15,
        borderColor: 'white',
        borderWidth: 2,
        position:'absolute',                          
        //left: 0,
        //top: 0,
        top: -15,
        alignItems:'center',
        //justifyContent:'center',
        alignSelf: 'center'
    },
    quickiesText: {
        margin: 25,
        fontWeight:'bold',
        fontSize: 15
    }
  });
  