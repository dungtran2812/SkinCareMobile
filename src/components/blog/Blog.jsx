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
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<FontAwesome name="arrow-left" size={20} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerText}>Bài viết hữu ích</Text>
			</View>
			<FlatList
				data={BlogData}
				renderItem={({ item }) => (
					<BlogCard blog={item} onPress={handlePress} />
				)}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.list}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	backButton: {
		padding: 5,
	},
	headerText: {
		fontSize: 20,
		fontWeight: "600",
		color: "#1E3A5F",
		flex: 1,
		marginLeft: 15,
	},
	list: {
		padding: 15,
	},
});

export default Blog;
