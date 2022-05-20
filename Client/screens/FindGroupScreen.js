import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import CreateGroup from "../components/CreateGroup";
import GroupPreview from "../components/GroupPreview";
import PostPreview from "../components/PostPreview";
import WideGroupPreview from "../components/WideGroupPreview";
import {AntDesign} from "@expo/vector-icons";

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
	const [search, setSearch] = useState("");
	
	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.postPreviews}
				data={groupPreviews}
				ListHeaderComponent={
					<View style={styles.header}>
						<View style={styles.searchBarWrapper}>
							<AntDesign
								style={styles.searchIcon}
								name={"search1"}
								size={18}
								color={"black"}
							/>
							
							<TextInput
								style={styles.searchBar}
								placeholder={"Search for a group.."}
								value={search}
								onChangeText={text => setSearch(text)}
							/>
						</View>
						
						<TouchableOpacity style={styles.filterButton}>
							<Text>Filter</Text>
						</TouchableOpacity>
					</View>
				}
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
	header: {
		display: "flex",
		alignItems: "flex-start",
		marginBottom: 20,
	},
	searchBarWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		backgroundColor: "rgb(240, 240, 240)",
		borderRadius: 15,
	},
	searchIcon: {
		padding: 15,
	},
	searchBar: {
		flex: 1,
		height: "100%",
		//borderWidth: 1,
		//borderColor: "rgb(230, 230, 230)",
		fontSize: 16,
		borderRadius: 10,
	},
	filterButton: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "rgb(240, 240, 240)",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 20,
	}
})

export default FindGroupScreen;
