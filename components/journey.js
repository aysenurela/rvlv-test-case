import React from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid, ActivityIndicator, StatusBar } from 'react-native';

export default class Journey extends React.Component {

    render() {
      const {data} = this.props
      const firstData = data[0]
      const {
        title,
        journeyId,
        points,
        percent,
        rank,
        skills,
        task : {title:taskTitle}
      } = firstData

      return (
        <View style={styles.journeyContainer}>
          <View style={styles.journeyProgression}>
              <Text>{points}</Text>
              <Text style={{color:'#5856d6', fontSize:30, fontWeight:'bold'}}>{percent}</Text>
              <Text>{rank}</Text>
          </View>
          <View style={styles.journeyTitle}>
            <Text > Journey of </Text>
            <Text style={{ fontSize:30, fontWeight:'bold' }}> {title} </Text>
          </View>
        </View>
        )
      }
}
  
  const styles = StyleSheet.create({
    journeyContainer: {
      //flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius:15,
      borderColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      // alignContent: 'center'
      marginRight: 25,
      marginLeft: 25,
      marginTop:15,
      marginBottom:0,
      padding:15
    },
    journeyProgression: {
      flexDirection: 'row',
      alignItems: 'center'
      //padding:10
    },
    journeyTitle: {
       alignItems: 'center',
      // justifyContent: 'center',
      // alignContent: 'center'
      //padding:10,
    }
  });