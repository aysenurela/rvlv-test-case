import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons'

export default class Journey extends React.Component {
  render() {
    const { journey } = this.props
    const {
      journeyId = '',
      title = '',
      points = '',
      percent = '',
      rank = ''
    } = { ...journey }

    return (
      <View style={styles.journeyContainer}>
        <View style={styles.journeyProgression}>
          <View>
            <FontAwesomeIcon icon={ faStar } color={'#fbc800'}/>
          </View>
          <View style={{flex:1}}><Text> {points} </Text></View>
          <View style={styles.progressBarContainer}>
              <AnimatedCircularProgress
                size={70}
                width={6}
                fill={percent}
                tintColor="#fbc800"
                backgroundColor="white"
                style={styles.progressBarComponent}>
                {() => (
                  <View style={styles.progressBarInside}>
                    <Text style={{color:'#5856d6', fontSize:25, fontWeight:'bold'}}>
                      {percent}
                    </Text>
                    <Text style={{color:'#5856d6', fontWeight:'bold'}}>
                      %
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>
          <View>
            <FontAwesomeIcon icon={ faBookmark } color={'#fbc800'}/>
          </View>
          <View><Text> {rank} </Text></View>
        </View>
        <View style={styles.journeyTitle}>
          <Text > Journey of </Text>
          <Text style={{ fontSize: 20, fontWeight:'bold' }}> {title} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  journeyContainer: {
    backgroundColor: 'white',
    borderRadius:15,
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 25,
    marginLeft: 25,
    marginTop:10,
    padding:10
  },
  journeyProgression: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  journeyTitle: {
    alignItems: 'center',
    marginTop:30,
    justifyContent:'center'
  },
  progressBarContainer: {
    position: 'absolute',
    bottom:-20,
    backgroundColor:'white',
    borderColor:'white', 
    borderWidth:7,
    borderRadius:45,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4
  },
  progressBarComponent: {
    borderColor:'lightgrey', 
    borderWidth:1, 
    borderRadius:35
  },
  progressBarInside: {
    alignItems:'center',
    justifyContent:'center',
    borderColor:'white', 
    borderWidth:1,
    borderRadius:40,
    width: '100%',
    height: '100%',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3
  }
});