import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./stacks/HomeStack";
import AuthenticationStack from "./stacks/AuthenticationStack";
import {StatusBar} from "react-native";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

export default function App() {
	const isSignedIn = true;
	
    return (
    	<BottomSheetModalProvider>
	        <NavigationContainer>
		        {isSignedIn ?
			        <HomeStack/>
			        :
			        <AuthenticationStack/>
		        }
		        
		        <StatusBar barStyle={"dark-content"}/>
	        </NavigationContainer>
	    </BottomSheetModalProvider>
    );
}
