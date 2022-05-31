import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
	BackHandler,
	FlatList,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native";
import BottomSheet, {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";
import SimpleButton from "../components/SimpleButton";
import {AntDesign} from "@expo/vector-icons";
import ViewMore from "../components/ViewMore";
import CreateGroup from "../components/CreateGroup";
import GroupPreview from "../components/GroupPreview";
import PostPreview from "../components/PostPreview";
import {SafeAreaView} from "react-native-safe-area-context";
import {getAllUserGroups} from "../services/GroupService";
import {getUserIdByEmail} from "../services/UserService";
import {useSelector} from "react-redux";

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

function Groups({groups, openSheet}) {
	return (
		<View style={styles.groups}>
			<ViewMore text={"Favorites"} style={{padding: 20}}/>

			<FlatList
				contentContainerStyle={styles.groupPreviews}
				data={groups}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				ListFooterComponent={<CreateGroup
					onPress={() => openSheet()}
				/>}
				ItemSeparatorComponent={VerticalSeparator}
				renderItem={({item}) =>
					<GroupPreview
						key={item.id}
						image={item.image}
						name={item.name}
					/>
				}
			/>

			<ViewMore text={"Your Groups"} style={{padding: 20}}/>
		</View>
	)
}

function Separator() {
	return <View style={styles.separator}/>
}

function VerticalSeparator() {
	return <View style={styles.verticalSeparator}/>
}

function GroupsScreen({route, navigation}) {
	const show = route.params?.show ?? false;
	
	// ref
	const bottomSheetRef = useRef(null);

	// variables
	const snapPoints = useMemo(() => [Platform.OS === "ios" ? "35%" : "40%"], []);

	// callbacks
	const handleSheetChanges = useCallback((index) => {
		//console.log('handleSheetChanges', index);
	}, []);

	function openSheet() {
		bottomSheetRef.current?.present();
	}
	
	if (show) {
		openSheet();
	}

	const [groups, setGroups] = useState([])
	const {username} = useSelector(state => state.auth)

	useEffect(() => {
		const backAction = () => {
			bottomSheetRef.current.close();
			bottomSheetRef.current.forceClose();

			return true;
		};

		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction,
		);
		
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

		return () => backHandler.remove();
	}, []);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <TouchableOpacity
					activeOpacity={0.6}
					onPress={() => {
						openSheet();
					}}
					style={{marginRight: 10}}
				>
					<AntDesign name="plus" size={24} color="black" />
				</TouchableOpacity>
			}
		})
	})

	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.postPreviews}
				data={groups}
				ListHeaderComponent={<Groups
					groups={groups}
					openSheet={openSheet}
				/>}
				ItemSeparatorComponent={Separator}
				renderItem={({item}) =>
					<PostPreview
						style={{
							marginHorizontal: 20,
							marginVertical: 2,
						}}
						key={item.id}
						image={item.image}
						title={item.name}
						preview={item.description}
						onPress={() => {
							navigation.navigate("Group", {
								group: item
							})
						}}
					/>
				}
			/>

			<BottomSheetModal
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				backdropComponent={(backdropProps) => (
					<BottomSheetBackdrop {...backdropProps} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior={"close"}/>
				)}
				enablePanDownToClose={true}
			>
				<SafeAreaView style={styles.contentContainer}>
					<Text style={styles.title}>Find your studymates</Text>
					<Text style={styles.description}>Create or find a group to study with other students</Text>

					<SimpleButton
						text={"Find group"}
						onPress={() => {
								bottomSheetRef.current.close();
								bottomSheetRef.current.forceClose();

							navigation.navigate("Find Group");
						}}
					/>

					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.createGroup}
						onPress={() => {
							bottomSheetRef.current.close()
							bottomSheetRef.current.forceClose();

							navigation.navigate("Create Group");
						}}
					>
						<Text style={styles.createGroupText}>
							Create new group
						</Text>
					</TouchableOpacity>
				</SafeAreaView>
			</BottomSheetModal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	contentContainer: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 30,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	description: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 30,
	},
	createGroup: {
		padding: 10,
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
	createGroupText: {
		marginTop: 5,
		fontSize: 16,
	}
});

export default GroupsScreen;
