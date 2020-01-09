import React from 'react'
import { StyleSheet, View } from 'react-native'
import Journey from './components/journey'
import Personal from './components/personal'
import SkillsProgress from './components/skillsProgress'
import TaskHeader from './components/taskHeader'
import Quickies from './components/quickies'
import { journeys_data } from './data/journeys_data'
import ViewPager from '@react-native-community/viewpager'

export default class App extends React.Component {
  render () {
      return (
        <ViewPager 
          style={styles.viewPager} 
          orientation= 'horizontal'
          >
          {journeys_data.map((journey,index) => {
            return (
              <View key={index}  style={styles.container}>
                <Personal />
                <Journey journey={journey} />
                <TaskHeader journey={journey} />
                <SkillsProgress journey={journey} />
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
})
