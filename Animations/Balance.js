import { Animated, Easing } from "react-native";

function BalanceAnimation(animation) {
    const balanceAnimationStyle = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            easing: Easing.sin,
            useNativeDriver: true
        }).start();
    };

    const opacityBalanceInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    });
    const animatedOpacityBalance = {
        opacity: opacityBalanceInterpolation
    };

    return { balanceAnimationStyle, animatedOpacityBalance };
}

export default BalanceAnimation;
