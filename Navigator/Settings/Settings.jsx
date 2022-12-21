import React, { useContext } from "react";
import { View, ScrollView, Text, TextInput, Switch } from "react-native";

import globalStyles from "../../styles";
import Context from "../../context";

import styles from "./Settings.styles";

function Settings() {
    const { settings, setSettings } = useContext(Context);

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={styles.title}>Время ожидания анимации</Text>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.text_input}
                    defaultValue={settings.waiting.toString()}
                    onChangeText={(changed) => {
                        setSettings({ ...settings, waiting: +changed });
                    }}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.title}>Баланс</Text>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.text_input}
                    defaultValue={settings.balance.toString()}
                    onChangeText={(changed) => {
                        setSettings({ ...settings, balance: +changed });
                    }}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.title}>Изменение баланса</Text>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.text_input}
                    defaultValue={settings.payment.toString()}
                    onChangeText={(changed) => {
                        setSettings({ ...settings, payment: +changed });
                    }}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.title}>Результат ставки</Text>
            <Switch
                trackColor={{ false: "#2b2e39", true: "#2b2e39" }}
                thumbColor={settings.bidResult ? "#5bd271" : "#e05263"}
                onValueChange={(changed) => {
                    setSettings({ ...settings, bidResult: changed });
                }}
                value={settings.bidResult}
                style={styles.switch}
            />
            <Text style={styles.title}>Ваше имя</Text>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.text_input}
                    defaultValue={settings.yourName}
                    onChangeText={(changed) => {
                        setSettings({ ...settings, yourName: changed });
                    }}
                    keyboardType="default"
                />
            </View>
            <Text style={styles.title}>Имя оппонента</Text>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.text_input}
                    defaultValue={settings.opponentName}
                    onChangeText={(changed) => {
                        setSettings({
                            ...settings,
                            opponentName: changed
                        });
                    }}
                    keyboardType="default"
                />
            </View>
        </ScrollView>
    );
}

export default Settings;
