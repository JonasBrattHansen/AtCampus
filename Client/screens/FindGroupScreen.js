import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import CreateGroup from "../components/CreateGroup";
import GroupPreview from "../components/GroupPreview";
import PostPreview from "../components/PostPreview";
import WideGroupPreview from "../components/WideGroupPreview";

const groupPreviews = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
		description: "Some description about the group bla bla lba...",
		members: 4,
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
		description: "Some description about the group bla bla lba...",
		members: 4,
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
		description: "Some description abo",
		members: 4,
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
		description: "Some description about the group bla blablablablablablablablabla lba...",
		members: 4,
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
		description: "Some description about the group bla bla lba...",
		members: 4,
	}
]

function Separator() {
	return <View style={styles.separator}/>
}

function FindGroupScreen(props) {
	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.postPreviews}
				data={groupPreviews}
				ItemSeparatorComponent={Separator}
				renderItem={({item}) =>
					<WideGroupPreview
						name={item.name}
						description={item.description}
						members={item.members}
						image={item.image}
					/>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	postPreviews: {
		padding: 20,
	},
	separator: {
		height: 15,
	},
})

export default FindGroupScreen;
