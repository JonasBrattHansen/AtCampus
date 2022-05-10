import React from 'react';
import {Image, StyleSheet, View} from "react-native";

function PostPreview({image, title, preview, date}) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{uri: image}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f8f8f8",
		borderRadius: 10,
		padding: 10,
	},
	image: {
		width: 30,
		height: 30,
	}
});

export default PostPreview;
