import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Personal extends React.Component {
    render() {
        return (
        <View style={styles.personContainer}>
            <View style={{flex:1}}>
                <TouchableOpacity>
                    <View>
                        <FontAwesomeIcon icon={ faBars } color={'white'}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.myStatus}> My Status </Text>
            </View>
            <View>
                <Image 
                    style={styles.avatar}
                    source={{uri:'http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png'}} />
            </View>
        </View>
        )
    }
}
  
const styles = StyleSheet.create({
    personContainer: {
        flexDirection: "row",
        marginRight: 25,
        marginLeft: 25,
        marginTop:25,
        marginBottom:15
    },
    myButton: {
        width: 25,
        height: 25,
    },
    myStatus: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    avatar: {
        width:60, 
        height:60,
        borderColor:"white",
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius:30,
    }
});