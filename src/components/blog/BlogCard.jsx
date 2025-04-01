import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BlogCard = ({ blog, onPress }) => {
	return (
		<TouchableOpacity style={styles.card} onPress={() => onPress(blog)}>
			<Image source={{ uri: blog.image }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title} numberOfLines={2}>
					{blog.title}
				</Text>
				<Text style={styles.description} numberOfLines={2}>
					{blog.description}
				</Text>
				<View style={styles.footer}>
					<View style={styles.metaInfo}>
						<FontAwesome name="clock-o" size={14} color="#666" />
						<Text style={styles.metaText}>5 phút đọc</Text>
					</View>
					<Text style={styles.readMore}>Đọc thêm</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 15,
		backgroundColor: "#fff",
		borderRadius: 15,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
		borderWidth: 1,
		borderColor: "#f0f0f0",
	},
	image: {
		width: "100%",
		height: 180,
	},
	content: {
		padding: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 8,
		color: "#1E3A5F",
		lineHeight: 24,
	},
	description: {
		fontSize: 14,
		color: "#666",
		lineHeight: 20,
		marginBottom: 12,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 8,
	},
	metaInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	metaText: {
		marginLeft: 5,
		fontSize: 13,
		color: "#666",
	},
	readMore: {
		color: "#1E3A5F",
		fontSize: 13,
		fontWeight: "500",
	},
});

export default BlogCard;
