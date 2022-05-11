import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GroupsScreen from "../screens/GroupsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

function HomeStack(props) {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					let iconName;
					
					if (route.name === "Home") {
						iconName = focused
							? "home"
							: "home-outline";
					} else if (route.name === "Activities") {
						iconName = focused
							? "book"
							: "book-outline";
					} else if (route.name === "Groups") {
						iconName = focused
							? "people"
							: "people-outline";
					} else if (route.name === "Me") {
						iconName = focused
							? "person"
							: "person-outline";
					}
					
					return <Ionicons name={iconName} size={size} color={color}/>;
				},
				tabBarActiveTintColor: "#7c7fca",
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				headerShown: false,
			}}/>
			<Tab.Screen name="Activities" component={ActivitiesScreen} />
			<Tab.Screen
				name="Groups"
				component={GroupsScreen}
				options={{
					headerTitle: "Your Groups",
					headerRight: () => {
						return <TouchableOpacity
							activeOpacity={0.6}
							onPress={() => {
								console.log("Pressed");
							}}
							style={{marginRight: 20}}
						>
							<AntDesign name="plus" size={24} color="black" />
						</TouchableOpacity>
					}
				}}
			/>
			<Tab.Screen name="Me" component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default HomeStack;
