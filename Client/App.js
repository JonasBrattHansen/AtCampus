import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Tab.Screen name="Activies" component={ActivitiesScreen} />
					<Tab.Screen name="Groups" component={HomeScreen} />
					<Tab.Screen name="Me" component={HomeScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
