import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import settingsScreen from './components/settingsScreen'
import balanceScreen from './components/balanceScreen'
import bidScreen from './components/bidScreen'
import { NavigationContainer } from '@react-navigation/native'
import Context from './components/context'

const Drawer = createDrawerNavigator()

export default function App() {
	let settings = {
		waiting: '1',
		balance: '100',
		bidResult: false,
		payment: '10',
		yourName: 'yourName',
		opponentName: 'opponentName',
	}
	function setSettings(value) {
		settings = value
	}
	function getSettings() {
		return settings
	}

	const myDarkTheme = {
		dark: true,
		colors: {
			primary: '#2749f8',
			background: '#14141c',
			card: '#2b2e39',
			text: '#fff',
			border: '#282631',
			notification: '#9933ff',
		},
	}

	return (
		<Context.Provider value={{ setSettings, getSettings }}>
			<NavigationContainer theme={myDarkTheme}>
				<Drawer.Navigator initialRouteName='settingsScreen'>
					<Drawer.Screen
						name='Настройки'
						component={settingsScreen}
						options={{
							headerTitleAlign: 'center',
							headerTitleStyle: {
								color: '#fff',
							},
							headerTintColor: '#fff',
						}}
					/>
					<Drawer.Screen
						name='Баланс'
						component={balanceScreen}
						options={{
							headerTitleAlign: 'center',
							headerTitleStyle: {
								color: '#fff',
							},
							headerTintColor: '#fff',
						}}
					/>
					<Drawer.Screen
						name='Ставки'
						component={bidScreen}
						options={{
							headerTitleAlign: 'center',
							headerTitleStyle: {
								color: '#fff',
							},
							headerTintColor: '#fff',
						}}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</Context.Provider>
	)
}
