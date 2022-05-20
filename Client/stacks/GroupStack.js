import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import GroupsScreen from "../screens/GroupsScreen";
import FindGroupScreen from "../screens/FindGroupScreen";

const Stack = createNativeStackNavigator();

function GroupStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Your Groups"
				component={GroupsScreen}
			/>
			<Stack.Screen
				name={"Create Group"}
				component={CreateGroupScreen}
				options={({navigation}) => ({
					headerLeft: () => {
						return <TouchableOpacity
							activeOpacity={0.6}
							onPress={() => navigation.goBack()}
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</TouchableOpacity>
					},
				})}
			/>
			<Stack.Screen
				name={"Find Group"}
				component={FindGroupScreen}
				options={({navigation}) => ({
					headerLeft: () => {
						return <TouchableOpacity
							activeOpacity={0.6}
							onPress={() => navigation.goBack()}
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</TouchableOpacity>
					}
				})}
			/>
		</Stack.Navigator>
	);
}

export default GroupStack;
