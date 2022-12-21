import React, { useContext, useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Pressable,
    Image,
    Animated,
    TouchableOpacity
} from "react-native";

import globalStyles from "../../styles";
import Context from "../../context";
import BalanceAnimation from "../../Animations/Balance";
import LogoAnimation from "../../Animations/Logo";

import styles from "./Bid.styles";

function Bid() {
    const { settings } = useContext(Context);

    const [balanceAnimation, setBalanceAnimation] = useState(
        new Animated.Value(0)
    );
    const { balanceAnimationStyle, animatedOpacityBalance } =
        BalanceAnimation(balanceAnimation);

    const [logoAnimation] = useState(new Animated.Value(0));
    const { logoAnimationStyle, animatedOpacityLower, animatedOpacityHigher } =
        LogoAnimation(logoAnimation);

    const [bid, setBid] = useState(parseFloat(10));

    function refreshAll() {
        setBalanceAnimation(new Animated.Value(0));
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={styles.text_new_handler}>
                <Text style={styles.text_new}>
                    Баланс:{" "}
                    {(
                        settings.balance +
                        bid * (settings.bidResult ? 1 : -1)
                    ).toFixed(2)}{" "}
                    FIT
                </Text>
            </View>
            <Animated.View
                style={{
                    ...styles.text_handler,
                    ...animatedOpacityBalance
                }}
            >
                <Text style={styles.text}>
                    Баланс: {settings.balance.toFixed(2)} FIT
                </Text>
            </Animated.View>
            <Pressable
                onPress={() => {
                    setTimeout(() => {
                        logoAnimationStyle();
                        balanceAnimationStyle();
                    }, settings.waiting * 1000);
                }}
                style={{
                    ...globalStyles.logo_container,
                    backgroundColor: settings.bidResult ? "#5bd271" : "#e05263"
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
                        source={require("../../Assets/cs-logo.png")}
                    />
                </Animated.View>
                <Animated.Text
                    style={{
                        ...globalStyles.logo_text,
                        fontSize: 50,
                        ...animatedOpacityHigher
                    }}
                >
                    {settings.bidResult ? "ВЫИГРЫШ" : "ПРОИГРЫШ"}
                </Animated.Text>
            </Pressable>

            <View style={styles.input_container}>
                <TextInput
                    style={styles.input_text}
                    defaultValue={bid.toString()}
                    onChangeText={(value) => setBid(parseFloat(value))}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    refreshAll();
                }}
                style={globalStyles.button_container}
            >
                <Text style={globalStyles.button_text}>Сделать ставку</Text>
            </TouchableOpacity>

            <View style={styles.versus}>
                <View style={styles.versus_item}>
                    <Text style={styles.versus_name}>{settings.yourName}</Text>
                </View>
                <Text style={styles.versus_text}>VS</Text>
                <View style={styles.versus_item}>
                    <Text style={styles.versus_name}>
                        {settings.opponentName}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Bid;
