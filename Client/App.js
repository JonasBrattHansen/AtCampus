import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import FrontPage from "./screens/frontPage";
import Login from "./screens/login";
import MakeUserName from "./screens/createUser/makeUserName";
import MakeUserInfo from "./screens/createUser/makeUserInfo";
import MakeUserSchool from "./screens/createUser/makeUserSchool";
import MakeUserPassword from "./screens/createUser/makeUserPassword";
import MakeUserComplete from "./screens/createUser/makeUserComplete";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const FrontpageStack = createNativeStackNavigator();


function FirstStack () {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
				headerShown: false,
			}}/>
            <Tab.Screen name="Activies" component={ActivitiesScreen} />
            <Tab.Screen name="Groups" component={HomeScreen} />
            <Tab.Screen name="Me" component={HomeScreen} />
        </Tab.Navigator>
    )
}


export default function App() {
    return (
        <NavigationContainer>
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
                <FrontpageStack.Screen name="firstStack" component={FirstStack}/>
            </FrontpageStack.Navigator>
        </NavigationContainer>
    );
}

