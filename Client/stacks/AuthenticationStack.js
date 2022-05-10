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
			<FrontpageStack.Screen name="frontPage" component={FrontPage} />
			<FrontpageStack.Screen name="login" component={Login} />
			<FrontpageStack.Screen name="makeUserName" component={MakeUserName} />
			<FrontpageStack.Screen name="makeUserInfo" component={MakeUserInfo} />
			<FrontpageStack.Screen
				name="makeUserSchool"
				component={MakeUserSchool}
			/>
			<FrontpageStack.Screen
				name="makeUserPassword"
				component={MakeUserPassword}
			/>
			<FrontpageStack.Screen
				name="makeUserComplete"
				component={MakeUserComplete}
			/>
		</FrontpageStack.Navigator>
	);
}

export default AuthenticationStack;
