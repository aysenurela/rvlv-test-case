import React from 'react';
import { Text, View, StyleSheet, Animated, TextInput } from 'react-native';

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            progress: 0
        }
        this.animation = new Animated.Value(this.state.progress)
    }

    componentDidMount() {
        const {
            skill: {
                percent = ''
            } = {}
        } = this.props

        this.setState({ progress: percent })
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            skill: {
                percent = ''
            } = {}
        } = this.props
        
        if (prevState.progress !== this.state.progress) {
            Animated.timing(this.animation, {
                toValue: percent,
                duration: this.props.duration
            }).start()
        }
    }

    render() {
        const {
            skill: {
                title = '',
                color: androidColor = '',
                percent = ''
            } = {}
        } = this.props

        const widthInterpolated = this.animation.interpolate({
            inputRange:[0,100],
            outputRange:['0%', '100%'],
            extrapolate: 'clamp'
        })

        const skillHexColor = androidColor.slice(4,androidColor.length)

        return(
            <View style={styles.containerView }>
                <View style={{justifyContent:'center'}}>
                    <View style={styles.percentageValue} >
                        <Text style={{fontWeight:'bold', color:`#${skillHexColor}`}}>{percent}</Text>
                    </View> 
                    <TextInput style={styles.skillTitle}> {title} </TextInput>
                </View>
                <View style={styles.barView}>  
                    <View 
                        style={[StyleSheet.absoluteFill, {
                            backgroundColor: "#e9ecef",
                            borderRadius: 20
                        }]}
                    />
                    <Animated.View
                        style = {{
                            ...styles.animatedView,
                            backgroundColor: `#${skillHexColor}`,
                            width: widthInterpolated 
                        }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row', 
        height: 35, 
        margin: 5, 
        borderRadius: 20
    },
    percentageValue: {
        height: 12,
        zIndex: 1, 
        position: 'absolute',
        backgroundColor: 'white', 
        width: 27,  
        height: 27,                            
        left: 4,
        top: 4,
        bottom: 0,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    skillTitle: {
        zIndex:1, 
        position: 'absolute', 
        left:35, 
        color: 'white'
    },
    barView: {
        flex: 1, 
        borderColor: '#e9ecef', 
        borderWidth: 1, 
        borderRadius: 20
    },
    animatedView: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        borderRadius: 20
    }
  })
