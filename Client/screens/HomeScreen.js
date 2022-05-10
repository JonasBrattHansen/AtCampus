import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import PostPreview from "../components/PostPreview";

const postPreviews = [
	{
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	}
]

function HomeScreen(props) {
	return (
		<View style={styles.container}>
			{postPreviews.map((preview, index) => <PostPreview
				key={index}
				image={preview.image}
				title={preview.title}
				preview={preview.preview}
				date={preview.date}
			/>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 20,
	}
})

export default HomeScreen;
