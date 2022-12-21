import React, { useContext, useState } from "react";
import {
    View,
    ScrollView,
    Text,
    Pressable,
    Image,
    Animated
} from "react-native";

import globalStyles from "../../styles";
import Context from "../../context";
import BalanceAnimation from "../../Animations/Balance";
import LogoAnimation from "../../Animations/Logo";

import styles from "./Balance.styles";

function Balance() {
    const { settings } = useContext(Context);

    const [balanceAnimation, setBalanceAnimation] = useState(
        new Animated.Value(0)
    );
    const { balanceAnimationStyle, animatedOpacityBalance } =
        BalanceAnimation(balanceAnimation);

    const [logoAnimation] = useState(new Animated.Value(0));
    const { logoAnimationStyle, animatedOpacityLower, animatedOpacityHigher } =
        LogoAnimation(logoAnimation);

    function refreshAll() {
        setBalanceAnimation(new Animated.Value(0));
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Pressable
                onPress={() => {
                    setTimeout(() => {
                        logoAnimationStyle();
                        balanceAnimationStyle();
                    }, settings.waiting * 1000);
                }}
                style={{
                    ...globalStyles.logo_container,
                    backgroundColor:
                        settings.payment > 0 ? "#5bd271" : "#e05263"
                }}
            >
                <Animated.View
                    style={{
                        ...globalStyles.logo_bg,
                        ...animatedOpacityLower
                    }}
                >
                    <Image
                        style={globalStyles.logo}
                        source={require("../../Assets/fit-logo.png")}
                    />
                </Animated.View>
                <Animated.Text
                    style={{
                        ...globalStyles.logo_text,
                        ...animatedOpacityHigher
                    }}
                >
                    {settings.payment.toFixed(2)}
                </Animated.Text>
            </Pressable>
            <Pressable
                style={styles.text_container}
                onPress={() => {
                    refreshAll();
                }}
            >
                <View style={styles.text_new_handler}>
                    <Text style={styles.text_new}>
                        {(settings.balance + settings.payment).toFixed(2)} FIT
                    </Text>
                </View>
                <Animated.View
                    style={{
                        ...styles.text_handler,
                        ...animatedOpacityBalance
                    }}
                >
                    <Text style={styles.text}>
                        {settings.balance.toFixed(2)} FIT
                    </Text>
                </Animated.View>
            </Pressable>
            <Text style={styles.random_text}>
                <Text style={globalStyles.fit}>FITcoin</Text> - это
                криптовалюта, созданная Факультетом Информационных Технологий.
                Счет создается во время поступления, на него начисляется
                стипендия. Накопленными монетами вы можете оплачивать пересдачи,
                отработки и еду в столовой. Удачной учебы!
            </Text>
        </ScrollView>
    );
}

export default Balance;
