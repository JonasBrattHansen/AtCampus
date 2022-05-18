import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";

function ChangePasswordScreen(props) {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Change password</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginTop: 100,
		marginBottom: 40,
	},
})

export default ChangePasswordScreen;
