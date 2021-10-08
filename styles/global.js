import { StyleSheet, Dimensions } from 'react-native'

let deviceWidth = Dimensions.get('window').width - 40

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	/*SETTINGS*/

	settings__title: {
		color: 'white',
		fontWeight: 'bold',
	},
	settings__input_container: {
		width: '100%',
		marginTop: 7,
		marginBottom: 12,
	},
	settings__text_input: {
		color: '#fff',
		height: 50,
		backgroundColor: '#2b2e39',
		paddingHorizontal: 15,
		borderRadius: 15,
	},
	settings__switch: {
		marginTop: 7,
		marginBottom: 12,
	},
	settings__button_container: {
		backgroundColor: '#2749f8',
		borderRadius: 15,
		width: '100%',
		height: 50,
		justifyContent: 'center',
		marginTop: 10,
	},
	settings__button_text: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},

	/*BALANCE*/

	balance__logo_container: {
		borderRadius: deviceWidth / 2,
		width: deviceWidth,
		height: deviceWidth,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	balance__logo_bg: {
		backgroundColor: '#2b2e39',
		borderRadius: deviceWidth / 2,
		width: deviceWidth,
		height: deviceWidth,
		justifyContent: 'center',
		alignItems: 'center',
	},
	balance__logo_text: {
		fontSize: 100,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		position: 'absolute',
		opacity: 0,
	},
	balance__logo: {
		width: deviceWidth,
		height: deviceWidth,
		borderRadius: deviceWidth / 2,
	},
	balance__text_container: {
		borderRadius: 20,
		backgroundColor: '#2b2e39',
		width: '100%',
		alignItems: 'center',
	},
	balance__text_handler: {
		borderRadius: 20,
		backgroundColor: '#2b2e39',
		width: '100%',
		alignItems: 'center',
	},
	balance__text: {
		fontSize: 60,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	balance__text_new_handler: {
		borderRadius: 20,
		backgroundColor: '#2b2e39',
		width: '100%',
		alignItems: 'center',
		position: 'absolute',
	},
	balance__text_new: {
		fontSize: 60,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	balance__random_text: {
		color: '#2b2e39',
		fontSize: 18,
		textAlign: 'justify',
		marginTop: 20,
	},

	/*BID*/
	bid__logo_text: {
		fontSize: 50,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		position: 'absolute',
		opacity: 0,
	},
	bid__text_handler: {
		borderRadius: 20,
		borderTopEndRadius: 0,
		borderTopStartRadius: 0,
		backgroundColor: '#2b2e39',
		width: deviceWidth + 40,
		alignItems: 'center',
		marginTop: -20,
		marginBottom: 20,
		paddingVertical: 10,
	},
	bid__text: {
		fontSize: 30,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	bid__text_new_handler: {
		borderRadius: 20,
		borderTopEndRadius: 0,
		borderTopStartRadius: 0,
		backgroundColor: '#2b2e39',
		width: deviceWidth + 40,
		alignItems: 'center',
		position: 'absolute',
		paddingVertical: 10,
	},
	bid__text_new: {
		fontSize: 30,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},

	bid__input_handler: {
		borderRadius: 10,
		backgroundColor: '#2b2e39',
		width: '100%',
		alignItems: 'center',
		paddingVertical: 5,
	},
	bid__input: {
		fontSize: 50,
		color: '#fff',
		textTransform: 'uppercase',
	},
	bid__input_new_handler: {
		borderRadius: 10,
		backgroundColor: '#2b2e39',
		width: '100%',
		alignItems: 'center',
		position: 'absolute',
		paddingVertical: 5,
	},
	bid__input_new: {
		fontSize: 50,
		color: '#fff',
		textTransform: 'uppercase',
	},
	bid__fit: {
		fontWeight: 'bold',
	},
	bid__input_container: {
		width: '100%',
		marginBottom: 10,
	},
	bid__input_text: {
		textAlign: 'center',
		borderColor: '#2b2e39',
		width: '100%',
		borderWidth: 3,
		borderRadius: 20,
		paddingVertical: 5,
		color: '#fff',
		fontSize: 50,
	},
	bid__versus: {
		backgroundColor: '#2b2e39',
		width: '100%',
		borderRadius: 20,
		padding: 20,
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	bid__versus_item: {},
	bid__versus_name: {
		color: '#fff',
		fontSize: 20,
	},
	bid__versus_text: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	/*/BID*/
})
