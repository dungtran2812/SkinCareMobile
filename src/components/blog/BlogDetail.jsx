import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const BlogDetail = ({ route, navigation }) => {
	const { blog } = route.params;

	const renderDetail = (detail) => {
		if (!Array.isArray(detail)) return null;

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
								<View key={liIndex} style={styles.bulletPoint}>
									<Text style={styles.bullet}>•</Text>
									<Text style={styles.li}>{li}</Text>
								</View>
							))}
						</View>
					);
				case "img":
					return (
						<View key={index} style={styles.imageContainer}>
							<Image
								source={{ uri: item.src }}
								style={styles.img}
								alt={item.alt}
							/>
							{item.alt && (
								<Text style={styles.imageCaption}>
									{item.alt}
								</Text>
							)}
						</View>
					);
				default:
					return null;
			}
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => navigation.goBack()}
					>
						<FontAwesome
							name="arrow-left"
							size={24}
							color="#1E3A5F"
						/>
					</TouchableOpacity>
				</View>
				<Image source={{ uri: blog.image }} style={styles.coverImage} />
				<View style={styles.contentContainer}>
					<Text style={styles.title}>{blog.title}</Text>
					<View style={styles.metaInfo}>
						<FontAwesome name="clock-o" size={14} color="#666" />
						<Text style={styles.metaText}>5 phút đọc</Text>
					</View>
					<Text style={styles.description}>{blog.description}</Text>
					{renderDetail(blog.detail)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		position: "absolute",
		top: 10,
		left: 10,
		zIndex: 1,
	},
	backButton: {
		backgroundColor: "rgba(255,255,255,0.9)",
		padding: 10,
		borderRadius: 20,
	},
	coverImage: {
		width: "100%",
		height: height * 0.4,
	},
	contentContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginBottom: 10,
		lineHeight: 32,
	},
	metaInfo: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
	},
	metaText: {
		marginLeft: 5,
		fontSize: 14,
		color: "#666",
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
		color: "#666",
		marginBottom: 20,
		fontStyle: "italic",
	},
	h2: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E3A5F",
		marginTop: 25,
		marginBottom: 15,
	},
	h3: {
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
		marginTop: 20,
		marginBottom: 12,
	},
	p: {
		fontSize: 16,
		lineHeight: 24,
		color: "#444",
		marginBottom: 15,
	},
	ul: {
		marginBottom: 15,
		marginLeft: 5,
	},
	bulletPoint: {
		flexDirection: "row",
		marginBottom: 8,
	},
	bullet: {
		fontSize: 16,
		marginRight: 8,
		color: "#1E3A5F",
	},
	li: {
		flex: 1,
		fontSize: 16,
		lineHeight: 24,
		color: "#444",
	},
	imageContainer: {
		marginVertical: 15,
	},
	img: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	imageCaption: {
		fontSize: 14,
		color: "#666",
		fontStyle: "italic",
		textAlign: "center",
		marginTop: 8,
	},
});

export default BlogDetail;
