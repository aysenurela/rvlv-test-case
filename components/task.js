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

        const tags = ['journey tag1', 'journey tag2', 'journey tag3']

        return (
        <View>
            <View className="todays_task" style={styles.taskContainer}>
                <View style={styles.taskTitle}>
                    <Text>Today's Task:</Text>
                    <Text style={{ fontSize:30, fontWeight:'bold' }}>Task Title</Text>
                </View>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index)=>{
                        return <Text key={index} style={styles.tags}>{tag}</Text>
                    })}
                </View>
            </View>
            <View className="progressContainer" style={styles.progressContainer}>
                <View style={{...styles.taskContainer, padding:15, flex:1 }}>
                    {tags.map((tag,index)=>{
                        return (
                            <View>
                                <ProgressBar 
                                    progress = {this.state.progress}
                                    duration = {500}
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
    progressContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    taskContainer: {
      flexDirection: 'column',
      backgroundColor: '#e9ecef',
      borderRadius:15,
      borderColor: '#00FF00',
      borderWidth: 1
    },
    taskTitle: {
      alignItems: 'center',
      padding:10,
    },
    tagsContainer: {
        flexDirection: 'row',
        padding:10,
    },
    tags: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5
    },
    skillsButton: {
        width: 30,
        height: 30,
        backgroundColor: 'pink',
        borderRadius:15,
        borderColor: 'white',
        borderWidth: 2,
        position:'absolute',                          
        //left: 0,
        //top: 0,
        bottom: -15,
        alignItems:'center',
        //justifyContent:'center',
        alignSelf: 'center'
    }
  });