import React, {useEffect, useRef, useState} from 'react';
import {
	Image,
	Keyboard, KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {login, logout} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {getUser, updateUser} from "../services/UserService";
import Toast from "react-native-toast-message";

function ProfileScreenInput({title, editable, value, returnKeyType, onSubmitEditing, keyboardType, blurOnSubmit, innerRef, onChangeText}) {
	return (
		<View style={inputStyles.inputWrapper}>
			<Text style={inputStyles.inputTitle}>{title}</Text>
			
			<TextInput
				editable={editable}
				ref={innerRef}
				textAlign={"center"}
				style={inputStyles.input}
				returnKeyType={returnKeyType}
				onSubmitEditing={onSubmitEditing}
				keyboardType={keyboardType}
				value={value}
				blurOnSubmit={blurOnSubmit}
				onChangeText={onChangeText}
			/>
		</View>
	)
}

const inputStyles = StyleSheet.create({
	inputWrapper: {
		display: "flex",
		flexDirection: "row",
		borderTopWidth: 1,
		borderTopColor: "rgb(240, 240, 240)",
	},
	inputTitle: {
		fontWeight: "500",
		padding: 20,
	},
	input: {
		flex: 1,
		maxWidth: "70%",
		marginLeft: "auto",
		padding: 20,
	}
})



function ProfileScreen({navigation}) {
	const dispatch = useDispatch();
	
	const { userId } = useSelector(state => state.auth);
	
	console.log("userId", userId);

	const [image, setImage] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [school, setSchool] = useState("");
	const [email, setEmail] = useState("");
	
	const lastNameRef = useRef();
	const schoolRef = useRef();
	const emailRef = useRef();

	function onLogOut() {
		dispatch(logout())
	}

	function onUpdate() {
		updateUser(userId, firstName, lastName, email, image)
			.then(response =>{

				Toast.show({
					type: "success",
					text1: "Successfully updated account",
				});

				console.log("Response from update", response)

			})
			.catch(error =>{
				const message = (error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				console.log("Error", message)

				Toast.show({
					type: "error",
					text1: "Failed to update account",
					text2: "Please try again"
				})
			})
	}


	async function onChangeProfilePicture() {
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
	}
	
	useEffect(() => {
		getUser(userId)
			.then(res => {
				console.log("Get user", res.data);
				const user = res.data;
				
				setImage(user?.userProfileImage);
				setFirstName(user?.firstName);
				setLastName(user?.lastName);
				setSchool(user?.schoolEntity?.schoolName)
				setEmail(user?.email);
			})
			.catch(err => {
				console.log("Failed to get user", err);
			})
	}, []);
	
	
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
			<View style={styles.container}>
				<View style={styles.imageWrapper}>
					<Image
						source={{uri: image ?? "https://images.unsplash.com/photo-1638913658211-c999de7fe786?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500"}}
						style={styles.image}
					/>
					
					<TouchableOpacity
						style={styles.imageButton}
						activeOpacity={0.6}
						onPress={onChangeProfilePicture}
					>
						<Text style={styles.imageButtonText}>Change</Text>
					</TouchableOpacity>
				</View>
				
				<KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={100}>
					<View style={styles.settings}>
						<ProfileScreenInput
							title={"First name"}
							value={firstName}
							onChangeText={setFirstName}
							returnKeyType={"next"}
							blurOnSubmit={false}
							onSubmitEditing={() => lastNameRef.current?.focus?.()}
						/>
						
						<ProfileScreenInput
							title={"Last name"}
							value={lastName}
							onChangeText={setLastName}
							returnKeyType={"next"}
							blurOnSubmit={false}
							innerRef={lastNameRef}
							onSubmitEditing={() => schoolRef.current?.focus?.()}
						/>
						
						<ProfileScreenInput
							title={"School"}
							value={school}
							onChangeText={setSchool}
							returnKeyType={"next"}
							innerRef={schoolRef}
							blurOnSubmit={false}
							editable={false}
							onSubmitEditing={() => emailRef.current?.focus?.()}
						/>
						
						<ProfileScreenInput
							title={"Email"}
							value={email}
							innerRef={emailRef}
							onChangeText={setEmail}
							returnKeyType={"done"}
							keyboardType={"email-address"}
						/>
					</View>
				</KeyboardAvoidingView>
				
				<View style={styles.actionsWrapper}>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.imageButton}
						onPress={() => onUpdate(firstName, lastName, email, image)}
					>
						<Text style={styles.imageButtonText}>Save changes</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.imageButton}
						activeOpacity={0.6}
						onPress={() => navigation.navigate("Change Password")}
					>
						<Text style={styles.imageButtonText}>Change password</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.imageButton}
						onPress={() => onLogOut()}
						>
						<Text style={styles.imageButtonText}>Log out</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	imageWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		marginBottom: 20,
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 10,
	},
	imageButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#e7e7ff",
		borderRadius: 20,
		marginTop: 10,
	},
	imageButtonText: {
		fontWeight: "500",
		fontSize: 15,
		color: "#102dc3",
	},
	settings: {
		borderBottomWidth: 1,
		borderBottomColor: "rgb(240, 240, 240)",
	},
	actionsWrapper: {
		marginTop: "auto",
		padding: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
})

export default ProfileScreen;
