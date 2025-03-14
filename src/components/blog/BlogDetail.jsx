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

	const renderDetail = (detail) => {
		if (!Array.isArray(detail)) {
			return null;
		}

		return detail.map((item, index) => {
			switch (item.type) {
				case "h2":
					return (
						<Text key={index} style={styles.h2}>
							{item.content}
						</Text>
					);
				case "h3":
					return (
						<Text key={index} style={styles.h3}>
							{item.content}
						</Text>
					);
				case "p":
					return (
						<Text key={index} style={styles.p}>
							{item.content}
						</Text>
					);
				case "ul":
					return (
						<View key={index} style={styles.ul}>
							{item.content.map((li, liIndex) => (
								<Text key={liIndex} style={styles.li}>
									{li}
								</Text>
							))}
						</View>
					);
				case "img":
					return (
						<Image
							key={index}
							source={{ uri: item.src }}
							style={styles.img}
							alt={item.alt}
						/>
					);
				default:
					return null;
			}
		});
	};

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
				{renderDetail(blog.detail)}
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
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#880000",
	},
	content: {
		fontSize: 16,
		lineHeight: 24,
		color: "#666",
		marginBottom: 20,
	},
	h2: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
	},
	h3: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	p: {
		fontSize: 17,
		lineHeight: 24,
		color: "#666",
		marginBottom: 10,
	},
	ul: {
		marginBottom: 10,
	},
	li: {
		fontSize: 16,
		lineHeight: 24,
		color: "#666",
	},
	img: {
		width: "100%",
		height: 180,
		marginBottom: 10,
	},
});

export default BlogDetail;
