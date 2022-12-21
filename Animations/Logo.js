import { useState } from "react";
import { Animated, Easing } from "react-native";

function LogoAnimation(animation) {
    const logoAnimationStyle = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.quad,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1500,
                easing: Easing.exp,
                useNativeDriver: true
            }).start();
        });
    };

    const opacityLowerInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    });
    const animatedOpacityLower = {
        opacity: opacityLowerInterpolation
    };

    const opacityHigherInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const animatedOpacityHigher = {
        opacity: opacityHigherInterpolation
    };

    return {
        logoAnimationStyle,
        animatedOpacityLower,
        animatedOpacityHigher
    };
}

export default LogoAnimation;
