import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const PromotionDetail = ({ route }) => {
	const navigation = useNavigation();
	const { promotion } = route.params;
	const date = new Date(promotion.date);
	const formattedDate = `${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()} - ${date.getHours()}:${String(
		date.getMinutes()
	).padStart(2, "0")}`;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<Icon name="arrow-left" size={20} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Chi tiết khuyến mãi</Text>
				<View style={styles.placeholder} />
			</View>

			<ScrollView style={styles.content}>
				<Image source={{ uri: promotion.image }} style={styles.image} />

				<View style={styles.infoContainer}>
					<View style={styles.tagRow}>
						<View style={styles.tag}>
							<Text style={styles.tagText}>Khuyến mãi</Text>
						</View>
						<View style={styles.dateContainer}>
							<Icon name="clock-o" size={14} color="#666" />
							<Text style={styles.date}>{formattedDate}</Text>
						</View>
					</View>

					<Text style={styles.title}>{promotion.title}</Text>

					<Text style={styles.description}>
						{promotion.fullDescription || promotion.description}
					</Text>
				</View>
			</ScrollView>
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
		paddingHorizontal: 15,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#E9ECEF",
		backgroundColor: "#fff",
	},
	backButton: {
		padding: 8,
	},
	headerTitle: {
		flex: 1,
		textAlign: "center",
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
	},
	placeholder: {
		width: 36,
	},
	content: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 250,
		resizeMode: "cover",
	},
	infoContainer: {
		padding: 16,
	},
	tagRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	tag: {
		backgroundColor: "#FFE0B2",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
	},
	tagText: {
		color: "#FF9800",
		fontSize: 14,
		fontWeight: "500",
	},
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	date: {
		fontSize: 14,
		color: "#666",
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
		color: "#1E3A5F",
		marginBottom: 12,
		lineHeight: 28,
	},
	description: {
		fontSize: 16,
		color: "#4A4A4A",
		lineHeight: 24,
	},
});

export default PromotionDetail;
