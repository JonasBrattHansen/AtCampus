import React from 'react';
import {Text, View} from "react-native";
import PostPreview from "../components/PostPreview";

function HomeScreen(props) {
	return (
		<View>
			<Text>Home Screen</Text>
			
			<PostPreview
				image={"https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
				title={"Math Study Group"}
				preview={"My lovely post"}
				date={"4 March"}
			/>
		</View>
	);
}

export default HomeScreen;
