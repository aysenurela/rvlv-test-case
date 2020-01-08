import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Slider } from 'react-native';
import Journey from './components/journey'
import Personal from './components/personal'
import Task from './components/task'
import Quickies from './components/quickies'
import { journeys_data } from './data/journeys_data'


export default function App() {
journeys_data.map(()=>console.log("data"))
  return (
    <View style={styles.container}>
      <Personal />
      <Journey data={journeys_data} />
      <Task data={journeys_data}/>
      <Quickies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 24,
    //padding: 10,
    backgroundColor: '#5856d6',

    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
