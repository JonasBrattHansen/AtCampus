import React, {useCallback, useMemo, useRef} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import { BlurView } from 'expo-blur';
import BottomSheet from "@gorhom/bottom-sheet";
import SimpleButton from "../components/SimpleButton";
import {AntDesign} from "@expo/vector-icons";
import ViewMore from "../components/ViewMore";
import CreateGroup from "../components/CreateGroup";
import GroupPreview from "../components/GroupPreview";
import PostPreview from "../components/PostPreview";

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

function Groups() {
	return (
		<View style={styles.groups}>
			<ViewMore text={"Favorites"} style={{padding: 20}}/>
			
			<FlatList
				contentContainerStyle={styles.groupPreviews}
				data={groupPreviews}
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

function GroupsScreen({navigation}) {
	// ref
	const bottomSheetRef = useRef(null);
	
	// variables
	const snapPoints = useMemo(() => ['40%'], []);
	
	// callbacks
	const handleSheetChanges = useCallback((index) => {
		//console.log('handleSheetChanges', index);
	}, []);
	
	function openSheet() {
		bottomSheetRef.current.expand();
	}
	
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <TouchableOpacity
					activeOpacity={0.6}
					onPress={() => {
						openSheet();
					}}
					style={{marginRight: 20}}
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
				data={postPreviews}
				ListHeaderComponent={Groups}
				ItemSeparatorComponent={Separator}
				renderItem={({item}) =>
					<PostPreview
						style={{
							marginHorizontal: 20,
							marginVertical: 2,
						}}
						key={item.id}
						image={item.image}
						title={item.title}
						preview={item.preview}
						date={item.date}
					/>
				}
			/>
			
			<TouchableWithoutFeedback style={styles.background} onPress={() => bottomSheetRef.current.close()}>
				<BottomSheet
					ref={bottomSheetRef}
					snapPoints={snapPoints}
					index={-1}
					onChange={handleSheetChanges}
					enablePanDownToClose={true}
					style={styles.sheet}
				>
					<View style={styles.contentContainer}>
						<Text style={styles.title}>Find your studymates</Text>
						<Text style={styles.description}>Create or find a group to study with other students</Text>
						
						<SimpleButton text={"Find group"}/>
						<TouchableOpacity
							activeOpacity={0.6}
							style={styles.createGroup}
						>
							<Text style={styles.createGroupText}>
								Create new group
							</Text>
						</TouchableOpacity>
					</View>
				</BottomSheet>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		flex: 1,
		backgroundColor: "#000",
	},
	blur: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		flex: 1,
		zIndex: 0,
	},
	sheet: {
		zIndex: 2,
	},
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
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
