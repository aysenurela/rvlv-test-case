import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class ProgressBar extends React.Component {
    
    componentWillMount() {
        this.animation = new Animated.Value(this.props.progress)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.progress !== this.props.progress) {
            Animated.timing(this.animation, {
                toValue: this.props.progress,
                duration: this.props.duration
            }).start()
        }
    }

    render() {
        const {
            height,
            borderColor,
            borderWidth,
            borderRadius,
            barColor,
            fillColor,
            duration,
            skill: {
                skillId,
                title,
                color: androidColor,
                percent
            }
        } = this.props

        const widthInterpolated = this.animation.interpolate({
            inputRange:[0,100],
            outputRange:['0%', '100%'],
            extrapolate: 'clamp'
        })

        let hexCol = androidColor.slice(4,androidColor.length).toLowerCase()

        return(
            <View style={{flexDirection: 'row', height, margin: 5, borderRadius }}>
                <View style={{justifyContent:'center'}}>
                    <View 
                    style={{
                        zIndex:1, 
                        position:'absolute',
                        backgroundColor:'white', 
                        width:28,  
                        height:28,                            
                        left: 3,
                        top: 3,
                        bottom: 0,
                        borderRadius,
                        alignItems:'center',
                        justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', color:`#${hexCol}`}}>{percent}</Text>
                    </View> 
                    <Text style={{position: 'absolute', zIndex:1, left:35, color: 'white' }}> {title} </Text>
                </View>
                <View style={{flex:1, borderColor, borderWidth, borderRadius}}>  
                    <View 
                        style={[StyleSheet.absoluteFill, {
                            backgroundColor: fillColor,
                            borderRadius
                        }]}
                    />
                    <Animated.View
                        style = {{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: `#${hexCol}`,
                            width: widthInterpolated,
                            borderRadius
                        }}
                    />
                </View>
            </View>
        )
    }
}

ProgressBar.defaultProps = {
    height: 35,
    borderColor: '#e9ecef',
    borderWidth:1,
    borderRadius: 20,
    //barColor: "",
    fillColor: "#e9ecef",
    duration: 100
}
