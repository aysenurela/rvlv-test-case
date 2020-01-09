import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ProgressBar from './utils/progressBar'

export default class SkillsProgress extends React.Component {
    render() {
        const { journey } = this.props
        const {
          skills = [],
        } = { ...journey }

        return (
        <View>
            <View style={styles.progressContainer}>
                <View style={{...styles.taskContainer, flex:1 }}>
                    {skills.map((skill)=>{
                        return (
                            <View>
                                <ProgressBar
                                    duration = {500}
                                    skill = {skill}/>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.skillsButton}>  
                    <TouchableOpacity>
                        <Text>...</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
        )
    }
}
  
const styles = StyleSheet.create({
    taskContainer: {
      backgroundColor: 'white',
      borderRadius:15,
      borderColor: '#ff9500',
      borderWidth: 1,
      marginRight: 25,
      marginLeft: 25,
      // marginTop:15,
      // padding:15
    },
    progressContainer: {
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center'
    },
    skillsButton: {
        color: '#5755d5',
        zIndex:1,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius:15,
        borderColor: '#5755d5',
        borderWidth: 4,
        position:'absolute',                          
        bottom: -15,
    }
});