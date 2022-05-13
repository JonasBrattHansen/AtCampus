import React, {useRef, useState} from 'react';
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform, ScrollView,
	StyleSheet, TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";

import * as ImagePicker from 'expo-image-picker';

function Separator() {
	return <View style={styles.separator}/>
}

function CreateGroupScreen(props) {
	const [image, setImage] = useState(null);
	const [groupName, setGroupName] = useState("");
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	
	const groupNameRef = useRef();
	const subjectRef = useRef();
	const descriptionRef = useRef();
	
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		
		console.log(result);
		
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	
	function createGroup() {
		console.log("Create group", groupName, subject, description, image);
	}
	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={{flex: 1, backgroundColor: "white"}}>
				<KeyboardAvoidingView contentContainerStyle={{backgroundColor: "white", alignItems: "center"}} behavior={"position"} keyboardVerticalOffset={100}>
					<TouchableOpacity
						style={styles.imageWrapper}
						activeOpacity={0.6}
						onPress={() => pickImage()}
					>
						{image && <Image
							source={{uri: image}}
							style={styles.image}
						/>}
					</TouchableOpacity>
					
					<View style={styles.divider}/>
					
					<View style={styles.inputs}>
						<InputField
							innerRef={groupNameRef}
							title={"Group name"}
							placeholder={"Group name.."}
							onSubmitEditing={() => subjectRef.current?.focus?.()}
							blurOnSubmit={false}
							value={groupName}
							returnKeyType={"next"}
							onChangeText={val => setGroupName(val)}
						/>
						
						<Separator/>
						
						<InputField
							innerRef={subjectRef}
							title={"Subject"}
							placeholder={"Subject.."}
							onSubmitEditing={() => descriptionRef.current?.focus?.()}
							blurOnSubmit={false}
							returnKeyType={"next"}
							value={subject}
							onChangeText={val => setSubject(val)}
						/>
						
						<Separator/>
						
						<InputField
							innerRef={descriptionRef}
							title={"Description"}
							placeholder={"Description.."}
							multiline
							value={description}
							onChangeText={val => setDescription(val)}
							onSubmitEditing={() => createGroup()}
						/>
					</View>
					
					<View style={styles.buttonWrapper}>
						<SimpleButton text={"Next"} onPress={() => createGroup()}/>
					</View>
				</KeyboardAvoidingView>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "white",
	},
	imageWrapper: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: "rgb(235, 235, 235)",
		margin: 20
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},
	divider: {
		height: 1,
		backgroundColor: "#f2f4f5",
		width: "100%",
	},
	inputs: {
		width: "100%",
		padding: 20,
	},
	separator: {
		height: 20,
	},
	buttonWrapper: {
		padding: 20,
		width: "100%",
	}
})

export default CreateGroupScreen;
