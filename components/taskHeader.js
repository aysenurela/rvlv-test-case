import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TaskHeader extends React.Component {
    render() {
        const { journey } = this.props
        const {
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
                    <Text style={{ fontSize:20, fontWeight:'bold', color: '#5755d5'}}> {taskTitle} </Text>
                </View>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index)=>{
                        return <Text key={index} style={styles.tags}> {tag} </Text>
                    })}
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
      marginTop:10,
      padding:10
    },
    taskTitle: {
      alignItems: 'center',
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tags: {
        backgroundColor: '#e9ecef',
        margin: 3,
        fontSize: 10,
    }
});