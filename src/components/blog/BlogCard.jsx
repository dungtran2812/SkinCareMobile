import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlogCard = ({ blog, onPress }) => {
	return (
		<TouchableOpacity style={styles.card} onPress={() => onPress(blog)}>
			<Image source={{ uri: blog.image }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{blog.title}</Text>
				<Text style={styles.description}>{blog.description}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		overflow: "hidden",
		elevation: 3,
	},
	image: {
		width: "100%",
		height: 200,
	},
	content: {
		padding: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#333",
	},
	description: {
		fontSize: 16,
		color: "#666",
	},
});

export default BlogCard;
