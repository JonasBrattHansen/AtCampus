import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import PostPreview from "../components/PostPreview";
import Welcome from "../components/Welcome";
import {SafeAreaView} from "react-native-safe-area-context";
import GroupPreview from "../components/GroupPreview";
import ViewMore from "../components/ViewMore";
import CreateGroup from "../components/CreateGroup";
import {getAllGroups, getAllPostsByGroup, getAllUserGroups} from "../services/GroupService";
import {useSelector} from "react-redux";
import {getUserIdByEmail} from "../services/UserService";

const postPreviews = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Math Study Group",
		preview: "My lovely post",
		date: "4 March",
	}
];

const groupPreviews = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		name: "Math Study Group",
	}
]

function Separator() {
	return <View style={styles.separator}/>
}

function VerticalSeparator() {
	return <View style={styles.verticalSeparator}/>
}

function Groups({groups}) {

	return (
		<View style={styles.groups}>
			<ViewMore text={"My Groups"} style={{padding: 20}}/>
			
			<FlatList
				contentContainerStyle={styles.groupPreviews}
				data={groups}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				ListFooterComponent={<CreateGroup/>}
				ItemSeparatorComponent={VerticalSeparator}
				renderItem={({item}) =>
					<GroupPreview
						key={item.id}
						image={item.image}
						name={item.name}
					/>
				}
			/>
			
			<Text style={styles.recent}>Recent Activity</Text>
		</View>
	)
}

function HomeScreen(props) {
	const [groups, setGroups] = useState([]);
	const [posts, setPosts] = useState([]);

	const { username } = useSelector(state => state.auth);
	
	useEffect( () => {
		getUserIdByEmail(username)
			.then(userId => {
				getAllUserGroups(userId)
					.then(response => {
						const groups = response?.data;
						
						setGroups(groups)
					})
					.catch((err) => {
						console.log("Failed to get all groups", err)
					})
			})
			.catch(err => {
				console.log("Failed to get userId", err);
			})
	}, []);
	
	
	return (
		<SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
			<View style={styles.welcome}>
				<Welcome
					title={"Good Morning"}
					date={"Monday, January 25, 2021"}
					week={"Week 4"}
					temperature={"25"}
				/>
			</View>
	
			<FlatList
				contentContainerStyle={styles.postPreviews}
				data={posts}
				ListHeaderComponent={<Groups groups={groups}/>}
				ItemSeparatorComponent={Separator}
				renderItem={({item}) =>
					<PostPreview
						style={{
							marginHorizontal: 20,
							marginVertical: 2,
						}}
						key={item.id}
						image={item.userEntity?.userProfileImage}
						title={item.title}
						preview={item.body}
						date={item.date}
					/>
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	welcome: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f4f5",
	},
	groups: {
		marginBottom: 10,
	},
	groupPreviews: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	postPreviews: {
		paddingBottom: 20,
	},
	separator: {
		height: 10,
	},
	verticalSeparator: {
		width: 10,
	},
	recent: {
		fontSize: 20,
		fontWeight: "bold",
		paddingHorizontal: 20,
		paddingTop: 30,
	}
})

export default HomeScreen;
