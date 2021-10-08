import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'
import Context from './context'

function settingsScreen({ navigation }) {
	let { getSettings, setSettings } = useContext(Context)

	const [waiting, setWaiting] = useState(getSettings().waiting)
	const [balance, setBalance] = useState(getSettings().balance)
	const [bidResult, setBidResult] = useState(getSettings().bidResult)
	const [payment, setPayment] = useState(getSettings().payment)
	const [yourName, setYourName] = useState(getSettings().yourName)
	const [opponentName, setOpponentName] = useState(getSettings().opponentName)

	function sendSettings() {
		let settings = {}
		settings.waiting = waiting
		settings.balance = balance
		settings.bidResult = bidResult
		settings.payment = payment
		settings.yourName = yourName
		settings.opponentName = opponentName

		setSettings(settings)
	}

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.settings__title}>Время ожидания анимации</Text>
			<View style={globalStyles.settings__input_container}>
				<TextInput
					style={globalStyles.settings__text_input}
					defaultValue={waiting}
					onChangeText={setWaiting}
					keyboardType='numeric'
				/>
			</View>
			<Text style={globalStyles.settings__title}>Баланс</Text>
			<View style={globalStyles.settings__input_container}>
				<TextInput
					style={globalStyles.settings__text_input}
					defaultValue={balance}
					onChangeText={setBalance}
					keyboardType='numeric'
				/>
			</View>
			<Text style={globalStyles.settings__title}>Изменение баланса</Text>
			<View style={globalStyles.settings__input_container}>
				<TextInput
					style={globalStyles.settings__text_input}
					defaultValue={payment}
					onChangeText={setPayment}
					keyboardType='numeric'
				/>
			</View>
			<Text style={globalStyles.settings__title}>Результат ставки</Text>
			<Switch
				trackColor={{ false: '#2b2e39', true: '#2b2e39' }}
				thumbColor={bidResult ? '#5bd271' : '#e05263'}
				onValueChange={setBidResult}
				value={bidResult}
				style={globalStyles.settings__switch}
			/>
			<Text style={globalStyles.settings__title}>Ваше имя</Text>
			<View style={globalStyles.settings__input_container}>
				<TextInput
					style={globalStyles.settings__text_input}
					defaultValue={yourName}
					onChangeText={setYourName}
					keyboardType='default'
				/>
			</View>
			<Text style={globalStyles.settings__title}>Имя оппонента</Text>
			<View style={globalStyles.settings__input_container}>
				<TextInput
					style={globalStyles.settings__text_input}
					defaultValue={opponentName}
					onChangeText={setOpponentName}
					keyboardType='default'
				/>
			</View>

			<TouchableOpacity
				onPress={sendSettings}
				style={globalStyles.settings__button_container}
			>
				<Text style={globalStyles.settings__button_text}>
					Сохранить настройки
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default settingsScreen
