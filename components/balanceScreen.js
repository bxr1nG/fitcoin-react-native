import React, { useContext, useState } from 'react'
import {
	View,
	Text,
	Pressable,
	Image,
	Animated,
	Dimensions,
	Easing,
} from 'react-native'
import { globalStyles } from '../styles/global'
import Context from './context'

function balanceScreen({ navigation }) {
	let { getSettings } = useContext(Context)

	const [balance, setBalance] = useState(parseFloat(getSettings().balance))
	const [payment, setPayment] = useState(parseFloat(getSettings().payment))
	const [waiting, setWaiting] = useState(parseInt(getSettings().waiting))

	const [currentColor, setCurrentColor] = useState('#5bd271')

	function getColor(value) {
		if (value > 0) return '#5bd271'
		//5bd271
		else return '#e05263' //e05263
	}

	function refreshAll() {
		setBalance(parseFloat(getSettings().balance))
		setPayment(parseFloat(getSettings().payment))
		setWaiting(parseFloat(getSettings().waiting))

		setCurrentColor(getColor(payment))

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
			<Pressable
				onPress={() => {
					setTimeout(() => {
						logoAnimationStyle()
						balanceAnimationStyle()
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
						source={require('../images/fit-logo.png')}
					/>
				</Animated.View>
				<Animated.Text
					style={{
						...globalStyles.balance__logo_text,
						...animatedOpacityHigher,
					}}
				>
					{payment.toFixed(2)}
				</Animated.Text>
			</Pressable>
			<Pressable
				style={globalStyles.balance__text_container}
				onPress={() => {
					refreshAll()
				}}
			>
				<View style={{ ...globalStyles.balance__text_new_handler }}>
					<Text
						style={{
							...globalStyles.balance__text_new,
						}}
					>
						{(balance + payment).toFixed(2)} FIT
					</Text>
				</View>
				<Animated.View
					style={{
						...globalStyles.balance__text_handler,
						...animatedOpacityBalance,
					}}
				>
					<Text
						style={{
							...globalStyles.balance__text,
						}}
					>
						{balance.toFixed(2)} FIT
					</Text>
				</Animated.View>
			</Pressable>
			<Text style={globalStyles.balance__random_text}>
				<Text style={globalStyles.bid__fit}>FITcoin</Text> - это криптовалюта,
				созданная Факультетом Информационных Технологий. Счет создается во время
				поступления, на него начисляется стипендия. Накопленными монетами вы
				можете оплачивать пересдачи, отработки и еду в столовой. Удачной учебы!
			</Text>
		</View>
	)
}

export default balanceScreen
