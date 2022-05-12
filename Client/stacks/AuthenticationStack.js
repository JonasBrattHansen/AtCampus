import React from 'react';
import FrontPage from "../screens/frontPage";
import Login from "../screens/login";
import MakeUserName from "../screens/createUser/makeUserName";
import MakeUserInfo from "../screens/createUser/makeUserInfo";
import MakeUserSchool from "../screens/createUser/makeUserSchool";
import MakeUserPassword from "../screens/createUser/makeUserPassword";
import MakeUserComplete from "../screens/createUser/makeUserComplete";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const FrontpageStack = createNativeStackNavigator();

function AuthenticationStack(props) {
	return (
		<FrontpageStack.Navigator>
			<FrontpageStack.Screen
				name="Frontpage"
				component={FrontPage} options={{
				headerShown: false}}
			/>
			<FrontpageStack.Screen
				name="Login"
				component={Login}
				options={{ title: 'Login', headerTitleAlign: 'center' }}
			/>
			<FrontpageStack.Screen
				name="makeUserName"
				component={MakeUserName}
				options={{ title: 'Make user', headerTitleAlign: 'center' }}
			/>
			<FrontpageStack.Screen
				name="makeUserInfo"
				component={MakeUserInfo}
				options={{ title: 'Make user', headerTitleAlign: 'center' }}
			/>
			<FrontpageStack.Screen
				name="makeUserSchool"
				component={MakeUserSchool}
				options={{ title: 'Make user', headerTitleAlign: 'center' }}
			/>
			<FrontpageStack.Screen
				name="makeUserPassword"
				component={MakeUserPassword}
				options={{ title: 'Make user', headerTitleAlign: 'center' }}
			/>
			<FrontpageStack.Screen
				name="makeUserComplete"
				component={MakeUserComplete}
				options={{ title: 'Make user', headerTitleAlign: 'center'}}
			/>
		</FrontpageStack.Navigator>
	);
}

export default AuthenticationStack;
