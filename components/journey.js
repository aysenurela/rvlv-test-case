import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Journey extends React.Component {
    
    render() {
        return (
        <View style={styles.journeyContainer}>
          <View style={styles.journeyProgression}>
            <Text> Journey Points </Text>
            <Text> Journey Percentage </Text>
            <Text> Journey Rank </Text>
          </View>
          <View style={styles.journeyTitle}>
            <Text style={{ fontSize:10 }}> Journey of </Text>
            <Text style={{ fontSize:30, fontWeight:'bold' }}> Journey Title </Text>
          </View>
        </View>
        )
    }
}
  
  const styles = StyleSheet.create({
    journeyContainer: {
      flexDirection: 'column',
      backgroundColor: '#e9ecef',
      borderRadius:15,
      borderColor: '#00FF00',
      borderWidth: 1
    },
    journeyProgression: {
      flexDirection: 'row',
      padding:10,
    },
    journeyTitle: {
      alignItems: 'center',
      padding:10,
    }
  });