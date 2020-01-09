import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Slider } from 'react-native';
import Journey from './components/journey'
import Personal from './components/personal'
import Task from './components/task'
import Quickies from './components/quickies'
import { journeys_data } from './data/journeys_data'
import ViewPager from '@react-native-community/viewpager';

export default class App extends React.Component {
  render () {
      return (
        <ViewPager 
          style={styles.viewPager} 
          initialPage={0}
          onPageScroll={()=>{}}
          onPageScrollStateChanged={()=>{}}
          orientation= 'horizontal'
          >
          {journeys_data.map((journey,index)=>{
            return (
              <View key={index}  style={styles.container}>
                <Personal />
                <Journey data={journey} />
                <Task data={journey}/>
                <Quickies />
              </View> )
            })
          }
        </ViewPager>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5856d6',
  },
  viewPager: {
    flex: 1
  }
});
