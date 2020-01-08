import React from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid, ActivityIndicator, StatusBar } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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

              <View style={{flex:1}}><Text>{points}</Text></View>

              <View style={{
                position: 'absolute',
                bottom:-20,
                //left:0,
                backgroundColor:'white',
               
                borderColor:'white', 
                borderWidth:7,
                borderRadius:45,
                //shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 4}}>
                <AnimatedCircularProgress
                    size={70}
                    width={6}
                    fill={percent}
                    tintColor="#fbc800"
                    backgroundColor="white"
                    style={{borderColor:'lightgrey', borderWidth:1, borderRadius:35}}
                    >
                    {() => (
                      <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor:'white', 
                        borderWidth:1,
                        borderRadius:40,
                        width: '100%',
                        height: '100%',
                        //shadowOffset: { width: 0, height:  },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 3}}>
                        <Text style={{color:'#5856d6', fontSize:30, fontWeight:'bold'}}>
                          {percent}
                        </Text>
                        <Text style={{color:'#5856d6', fontSize:10, fontWeight:'bold'}}>
                          %
                        </Text>
                      </View>
                    )}
                </AnimatedCircularProgress>
              </View>
              <View><Text>{rank}</Text></View>
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
      marginTop:25,
      marginBottom:0,
      padding:15
    },
    journeyProgression: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center'
      //padding:10
    },
    journeyTitle: {
       alignItems: 'center',
       marginTop:30,
      // justifyContent: 'center',
      // alignContent: 'center'
      //padding:10,
    }
  });