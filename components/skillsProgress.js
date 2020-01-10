import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ProgressBar from './utils/progressBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

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
                    {skills.map((skill, index)=>{
                        return (
                            <View key={index}>
                                <ProgressBar
                                    duration = {500}
                                    skill = {skill}/>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.skillsButton}>  
                    <TouchableOpacity>
                    <View>
                        <FontAwesomeIcon icon={ faEllipsisH } color={'#5856d6'}/>
                    </View>
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
      borderColor: '#5755d5',
      borderWidth: 1,
      marginRight: 25,
      marginLeft: 25,
      marginTop:10,
      padding:5
    },
    progressContainer: {
        flexDirection:'row',
        justifyContent:'center'
    },
    skillsButton: {
        color: '#5755d5',
        zIndex:1,
        width: 26,
        height: 26,
        backgroundColor: 'white',
        borderRadius:15,
        borderColor: '#5755d5',
        borderWidth: 4,
        position:'absolute',                          
        bottom: -15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});