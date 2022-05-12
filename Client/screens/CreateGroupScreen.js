import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";

function Separator() {
	return <View style={styles.separator}/>
}

function CreateGroupScreen(props) {
	const [groupName, setGroupName] = useState("");
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<Image
				source={{uri: "https://images.unsplash.com/photo-1648737966900-730a5b2d673e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}}
				style={styles.image}
			/>
			
			<View style={styles.divider}/>
			
			<View style={styles.inputs}>
				<InputField
					title={"Group name"}
					value={groupName}
					onChange={val => setGroupName(val)}
				/>
				
				<Separator/>
				
				<InputField
					title={"Subject"}
					value={subject}
					onChange={val => setSubject(val)}
				/>
				
				<Separator/>
				
				<InputField
					title={"Description"}
					value={description}
					onChange={val => setDescription(val)}
				/>
			</View>
			
			<View style={styles.buttonWrapper}>
				<SimpleButton text={"Next"}/>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
		margin: 20,
	},
	divider: {
		height: 1,
		backgroundColor: "#f2f4f5",
		width: "100%",
	},
	inputs: {
		padding: 20,
		width: "100%",
	},
	separator: {
		height: 20,
	},
	buttonWrapper: {
		marginTop: "auto",
		padding: 20,
		width: "100%",
	}
})

export default CreateGroupScreen;
