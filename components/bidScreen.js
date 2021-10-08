import React, { useContext, useState } from 'react'
import {
	View,
	Text,
	TextInput,
	Pressable,
	Image,
	Animated,
	Easing,
	TouchableOpacity,
} from 'react-native'
import { globalStyles } from '../styles/global'
import Context from './context'

function bidScreen({ navigation }) {
	let { getSettings } = useContext(Context)

	const [balance, setBalance] = useState(parseFloat(getSettings().balance))
	const [bidResult, setBidResult] = useState(getSettings().bidResult)
	const [waiting, setWaiting] = useState(parseInt(getSettings().waiting))
	const [yourName, setYourName] = useState(getSettings().yourName)
	const [opponentName, setOpponentName] = useState(getSettings().opponentName)

	const [currentColor, setCurrentColor] = useState('#5bd271')
	const [bidText, setBidText] = useState('ПРОИГРЫШ')
	const [multipler, setMultipler] = useState(-1)
	const [bid, setBid] = useState(parseFloat(10))
	const [plusBalance, setPlusBalance] = useState(balance + bid * multipler)

	function getColor(value) {
		if (value) return '#5bd271'
		//5bd271
		else return '#e05263' //e05263
	}
	function getText(value) {
		if (value) return 'ВЫИГРЫШ'
		else return 'ПРОИГРЫШ'
	}
	function getMultipler(value) {
		if (value) return 1
		else return -1
	}

	function refreshAll() {
		setBalance(parseFloat(getSettings().balance))
		setBidResult(getSettings().bidResult)
		setWaiting(parseFloat(getSettings().waiting))
		setYourName(getSettings().yourName)
		setOpponentName(getSettings().opponentName)

		setCurrentColor(getColor(bidResult))
		setBidText(getText(bidResult))
		setMultipler(getMultipler(bidResult))
		setPlusBalance(balance + bid * multipler)

		setBalanceAnim(new Animated.Value(0))
	}

	/*LOGOANIM*/
	const logoAnim = useState(new Animated.Value(0))[0]
	const logoAnimationStyle = () => {
		Animated.timing(logoAnim, {
			toValue: 1,
			duration: 1500,
			easing: Easing.quad,
			useNativeDriver: true,
		}).start(() => {
			Animated.timing(logoAnim, {
				toValue: 0,
				duration: 1500,
				easing: Easing.exp,
				useNativeDriver: true,
			}).start()
		})
	}

	const opacityLowerInterpolation = logoAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0],
	})
	const animatedOpacityLower = {
		opacity: opacityLowerInterpolation,
	}

	const opacityHigherInterpolation = logoAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1],
	})
	const animatedOpacityHigher = {
		opacity: opacityHigherInterpolation,
	}
	/*/LOGOANIM*/

	/*BALANCEANIM*/
	const [balanceAnim, setBalanceAnim] = useState(new Animated.Value(0))
	const balanceAnimationStyle = () => {
		Animated.timing(balanceAnim, {
			toValue: 1,
			duration: 300,
			easing: Easing.sin,
			useNativeDriver: true,
		}).start()
	}

	const opacityBalanceInterpolation = balanceAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0],
	})
	const animatedOpacityBalance = {
		opacity: opacityBalanceInterpolation,
	}
	/*/BALANCEANIM*/

	return (
		<View
			style={{
				...globalStyles.container,
			}}
		>
			<View style={{ ...globalStyles.bid__text_new_handler }}>
				<Text
					style={{
						...globalStyles.bid__text_new,
					}}
				>
					Баланс: {plusBalance.toFixed(2)} FIT
				</Text>
			</View>
			<Animated.View
				style={{
					...globalStyles.bid__text_handler,
					...animatedOpacityBalance,
				}}
			>
				<Text
					style={{
						...globalStyles.bid__text,
					}}
				>
					Баланс: {balance.toFixed(2)} FIT
				</Text>
			</Animated.View>
			<Pressable
				onPress={() => {
					setTimeout(() => {
						logoAnimationStyle()
						balanceAnimationStyle()

						setBid(0)
					}, waiting * 1000)
				}}
				style={{
					...globalStyles.balance__logo_container,
					backgroundColor: currentColor,
				}}
			>
				<Animated.View
					style={{
						...globalStyles.balance__logo_bg,
						...animatedOpacityLower,
					}}
				>
					<Image
						style={{
							...globalStyles.balance__logo,
						}}
						source={require('../images/cs-logo.png')}
					/>
				</Animated.View>
				<Animated.Text
					style={{
						...globalStyles.bid__logo_text,
						...animatedOpacityHigher,
					}}
				>
					{bidText}
				</Animated.Text>
			</Pressable>

			<View style={globalStyles.bid__input_container}>
				<TextInput
					style={globalStyles.bid__input_text}
					defaultValue={bid.toString()}
					onChangeText={value => setBid(parseFloat(value))}
					keyboardType='numeric'
				/>
			</View>

			<TouchableOpacity
				onPress={() => {
					refreshAll()
				}}
				style={globalStyles.settings__button_container}
			>
				<Text style={globalStyles.settings__button_text}>Сделать ставку</Text>
			</TouchableOpacity>

			<View style={globalStyles.bid__versus}>
				<View style={globalStyles.bid__versus_item}>
					<Text style={globalStyles.bid__versus_name}>{yourName}</Text>
				</View>
				<Text style={globalStyles.bid__versus_text}>VS</Text>
				<View style={globalStyles.bid__versus_item}>
					<Text style={globalStyles.bid__versus_name}>{opponentName}</Text>
				</View>
			</View>
		</View>
	)
}

export default bidScreen
