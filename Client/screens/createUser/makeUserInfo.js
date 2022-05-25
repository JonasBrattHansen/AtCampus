import {ScrollView, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {useContext} from "react";
import {CreateUserContext} from "../../global/CreateUserContext";
import CreateAccountTitle from "../../components/CreateAccountTitle";

export default function MakeUserInfo({navigation, getEmail, getPhoneNr}) {
	const {
		setEmail,
		setPhoneNr,
		email,
		phoneNr
	} = useContext(CreateUserContext)
	
	function onPress() {
		if (email !== "" && phoneNr !== "") {
			navigation.navigate("makeUserSchool")
		} else {
			alert("Email and Phone number cant be empty")
		}
	}
	
	return (
		<View style={styles.container}>
			<StatusBar style="auto"/>
			<ScrollView style={styles.scroll}>
				<CreateAccountTitle/>
				<LoginInput
					title={"Email"}
					value={email}
					onChangeText={(val => setEmail(val))}
					keyboardType={"default"}
				/>
				
				<LoginInput
					title={"Phone number"}
					value={phoneNr}
					onChangeText={(val) => setPhoneNr(val)}
					keyboardType={"numeric"}
				/>
				
				<LoginButton navigation={navigation} title={"Next"} onPress={onPress}/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	scroll: {
		padding: 20,
	}
});
