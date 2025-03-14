import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import { FontAwesome } from "@expo/vector-icons";

const Blog = ({ navigation }) => {
	const handlePress = (blog) => {
		// Điều hướng đến trang chi tiết blog
		navigation.navigate("BlogDetail", { blog });
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<FontAwesome name="arrow-left" size={20} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerText}>Blog</Text>
			</View>
			<FlatList
				data={BlogData}
				renderItem={({ item }) => (
					<BlogCard blog={item} onPress={handlePress} />
				)}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.list}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	header: {
		flexDirection: "row",
		paddingVertical: 20,
		alignItems: "center",
		backgroundColor: "#B3E5FC",
		padding: 10,
		marginBottom: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		flex: 1,
	},
	list: {
		paddingBottom: 20,
	},
});

export default Blog;
