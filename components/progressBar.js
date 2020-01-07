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
            duration
        } = this.props

        const widthInterpolated = this.animation.interpolate({
            inputRange:[0,100],
            outputRange:['0%', '100%'],
            extrapolate: 'clamp'
        })

        return(
            <View style={{flexDirection: 'row', height, margin: 5, borderRadius }}>
                <View 
                style={{
                    zIndex:10, 
                    position:'absolute',
                    backgroundColor:'orange', 
                    width:31,  
                    height:31,                            
                    left: 2,
                    top: 2,
                    bottom: 0,
                    borderRadius,
                    alignItems:'center',
                    justifyContent:'center'}}>
                    <Text>10</Text>
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
                            backgroundColor: barColor,
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
    borderColor: 'blue',
    borderWidth:1,
    borderRadius: 20,
    barColor: "tomato",
    fillColor: "yellow",
    duration: 100
}
