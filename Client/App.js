import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./stacks/HomeStack";
import AuthenticationStack from "./stacks/AuthenticationStack";
import {StatusBar} from "react-native";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {Provider, useSelector} from "react-redux";
import store from "./store";

function Juice() {
	const {isLoggedIn} = useSelector(state => state.auth);
	
	return (
		<BottomSheetModalProvider>
			<NavigationContainer>
				{isLoggedIn ?
					<HomeStack/>
					:
					<AuthenticationStack/>
				}
				
				<StatusBar barStyle={"dark-content"}/>
			</NavigationContainer>
		</BottomSheetModalProvider>
	)
}

export default function App() {
    return (
    	<Provider store={store}>
		    <Juice/>
	    </Provider>
    );
}
