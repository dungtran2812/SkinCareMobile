import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const BlogDetail = ({ route, navigation }) => {
	const { blog } = route.params;

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<FontAwesome name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<Image source={{ uri: blog.image }} style={styles.image} />
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{blog.title}</Text>
				<Text style={styles.content}>{blog.description}</Text>
				<Text style={styles.detail}>{blog.detail}</Text>
			</View>
		</ScrollView>
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
		padding: 10,
	},
	image: {
		width: "100%",
		height: height / 3,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginBottom: 20,
	},
	contentContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	content: {
		fontSize: 16,
		lineHeight: 24,
		color: "#666",
		marginBottom: 20,
	},
	detail: {
		fontSize: 16,
		lineHeight: 24,
		color: "#333",
	},
});

export default BlogDetail;
