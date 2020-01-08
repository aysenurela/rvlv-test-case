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
        backgroundColor: '#ff9500',
        alignItems:'center',
        position:'absolute',
        bottom: -50,
        height: 130,
        alignSelf:'center',
        width:'100%',
        borderRadius:50
    },
    quickiesButton: {
        zIndex:1,
        width: 30,
        height: 30,
        borderWidth: 4, 
        borderRadius:15,
        color: '#ff9500',
        backgroundColor: 'white',
        borderColor: '#ff9500',
        position:'absolute',                          
        top: -15,
        justifyContent:'center',
        alignItems:'center',
    },
    quickiesText: {
        margin: 25,
        fontWeight:'bold',
        fontSize: 15,
        color: 'white'
    }
  });
  