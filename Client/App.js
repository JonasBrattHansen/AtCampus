import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./stacks/HomeStack";
import AuthenticationStack from "./stacks/AuthenticationStack";

export default function App() {
	const isSignedIn = true;
	
    return (
        <NavigationContainer>
	        {isSignedIn ?
		        <HomeStack/>
		        :
		        <AuthenticationStack/>
	        }
        </NavigationContainer>
    );
}

