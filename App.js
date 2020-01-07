import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Slider } from 'react-native';
import Journey from './components/journey'
import Personal from './components/personal'
import Task from './components/task'
import Quickies from './components/quickies'


export default function App() {

  return (
    <View style={styles.container}>
      <Personal />
      <Journey />
      <Task />
      <Quickies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 25,
    //padding: 10,
    
     flex: 1,
     //alignItems: 'center',
    // justifyContent: 'center',
  },
});
