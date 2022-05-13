import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

function InputField({title, value, onChange}) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			
			<TextInput
				value={value}
				onChange={onChange}
				style={styles.input}
				placeholder={title}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		width: "100%",
	},
	input: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#f2f4f5",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 15,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	}
})

export default InputField;
