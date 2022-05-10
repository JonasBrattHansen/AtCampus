import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

function PostPreview({image, title, preview, date, onPress, style}) {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={[style, styles.container]}
			onPress={onPress}
		>
			<Image
				style={styles.image}
				source={{uri: image}}
			/>
			
			<View style={styles.info}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.preview}>{preview}</Text>
			</View>
			
			<Text style={styles.date}>{date}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#f8f8f8",
		borderRadius: 20,
		padding: 10,
		alignItems: "center",
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},
	info: {
		display: "flex",
		marginRight: "auto",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	preview: {
	
	}
});

export default PostPreview;
