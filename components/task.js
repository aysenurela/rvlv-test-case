import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
        setInterval(() => {
            this.setState(state => ({ progress: 70 }))
        }, 1000)
    }
    
    render() {
        const { journey } = this.props
        const {
          skills = [],
          task: {
              title:taskTitle = '', 
              tags = []
            } = {}
        } = { ...journey }

        return (
        <View>
            <View style={styles.taskContainer}>
                <View style={styles.taskTitle}>
                    <Text style={{ color: '#5755d5'}}> Today's Task: </Text>
                    <Text style={{ fontSize:30, fontWeight:'bold', color: '#5755d5'}}> {taskTitle} </Text>
                </View>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index)=>{
                        return <Text key={index} style={styles.tags}> {tag} </Text>
                    })}
                </View>
            </View>
            <View style={styles.progressContainer}>
                <View style={{...styles.taskContainer, flex:1 }}>
                    {skills.map((skill,index)=>{
                        return (
                            <View>
                                <ProgressBar 
                                    progress = {this.state.progress}
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
    taskTitle: {
      alignItems: 'center',
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tags: {
        //flex: 1,
        backgroundColor: '#e9ecef',
        // margin: 3,
        // paddingRight:5,
        // paddingLeft:5,
        // paddingBottom:3,
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
        bottom: -15,
    }
});