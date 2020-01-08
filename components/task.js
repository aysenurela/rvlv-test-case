import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ProgressBar from './progressBar'

export default class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            progress: 10
        }
    }

    componentDidMount() {
        const tagsPercentages = [20, 40, 70]
        setInterval( () => {
            this.setState(state => ({ progress: 70 }))
        }, 1000)
    }
    
    render() {

        //const tags = ['journey tag1', 'journey tag2', 'journey tag3']
        const {data} = this.props
        const firstData = data[0]
        const {
          title,
          journeyId,
          points,
          percent,
          rank,
          skills = [],
          task : {title:taskTitle, tags}
        } = firstData

        return (
        <View>
            <View className="todays_task" style={styles.taskContainer}>
                <View style={styles.taskTitle}>
                    <Text style={{ color: '#5755d5'}}>Today's Task:</Text>
                    <Text style={{ fontSize:30, fontWeight:'bold', color: '#5755d5'}}> {taskTitle} </Text>
                </View>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index)=>{
                        return <Text key={index} style={styles.tags}>{tag}</Text>
                    })}
                </View>
            </View>
            <View className="progressContainer" style={styles.progressContainer}>
                <View style={{...styles.taskContainer, flex:1 }}>
                    {skills.map((skill,index)=>{
                        return (
                            <View>
                                <ProgressBar 
                                    progress = {this.state.progress}
                                    duration = {500}
                                    skill = {skill}
                                />
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
      //flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius:15,
      borderColor: '#ff9500',
      borderWidth: 1,
      marginRight: 25,
      marginLeft: 25,
      marginTop:15,
      marginBottom:0,
      padding:15
    },
    progressContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    taskTitle: {
      alignItems: 'center',
      //padding:10,
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
        //padding:10,,
    },
    tags: {
        //flex: 1,
        backgroundColor: '#e9ecef',
        margin: 3,
        paddingRight:5,
        paddingLeft:5,
        paddingBottom:3,
        borderRadius: 5,
        fontSize: 10,
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
        //left: 0,
        //top: 0,
        bottom: -15,
        alignItems:'center',
        justifyContent:'center',
        //alignSelf: 'center'
    }
  });