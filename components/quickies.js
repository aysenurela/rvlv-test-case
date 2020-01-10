import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default class Quickies extends React.Component {
    render() {
        return (
            <View style={styles.quickies}>
                <View style={styles.quickiesButton}>    
                    <TouchableOpacity>
                        <View>
                            <FontAwesomeIcon icon={faArrowUp} color={'#ff9500'}/>
                        </View>
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
        flex: 1,
        backgroundColor: '#ff9500',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    quickiesButton: {
        zIndex: 1,
        width: 26,
        height: 26,
        borderWidth: 4, 
        borderRadius: 15,
        color: '#ff9500',
        backgroundColor: 'white',
        borderColor: '#ff9500',
        position: 'absolute',                          
        top: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quickiesText: {
        margin: 15,
        fontWeight:'bold',
        color: 'white'
    }
});
  