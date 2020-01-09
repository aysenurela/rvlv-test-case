import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class Personal extends React.Component {
    render() {
        return (
        <View style={styles.personContainer}>
            <View style={{flex:1}}>
                <Image  
                    style={styles.myButton}
                    source={{uri:'https://webstockreview.net/images/menu-icon-png-4.png'}} />
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
        //display:"flex",
        flexDirection: "row",
        marginRight: 25,
        marginLeft: 25,
        marginTop:25,
        marginBottom:0,
    },
    myButton: {
        width: 25,
        height: 25,
    },
    myStatus: {
        fontSize: 30,
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