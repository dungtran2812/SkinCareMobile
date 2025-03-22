import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const PromotionCard = ({ content }) => {
	const navigation = useNavigation();
	// Chuyển đổi ngày tháng từ string sang định dạng cần thiết (nếu cần)
	const date = new Date(content.date);
	const formattedDate = `${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()} - ${date.getHours()}:${String(
		date.getMinutes()
	).padStart(2, "0")}`; //cập nhật sao cho số phút vẫn hiện 2 chữ số

	const handlePress = () => {
		navigation.navigate("PromotionDetail", { promotion: content });
	};

	return (
		<TouchableOpacity
			style={styles.card}
			onPress={handlePress}
			activeOpacity={0.7}
		>
			<Image source={{ uri: content.image }} style={styles.image} />
			<View style={styles.contentContainer}>
				<View style={styles.header}>
					<View style={styles.tagContainer}>
						<Text style={styles.tag}>Khuyến mãi</Text>
					</View>
					<View style={styles.dateContainer}>
						<Icon name="clock-o" size={12} color="#666" />
						<Text style={styles.date}>{formattedDate}</Text>
					</View>
				</View>

				<Text style={styles.title} numberOfLines={2}>
					{content.title}
				</Text>

				<Text style={styles.description} numberOfLines={2}>
					{content.description}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		borderRadius: 15,
		marginBottom: 15,
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
		resizeMode: "cover",
	},
	contentContainer: {
		padding: 15,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	tagContainer: {
		backgroundColor: "#FFE0B2",
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 12,
	},
	tag: {
		color: "#FF9800",
		fontSize: 12,
		fontWeight: "500",
	},
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	date: {
		fontSize: 12,
		color: "#666",
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "#1E3A5F",
		marginBottom: 8,
		lineHeight: 22,
	},
	description: {
		fontSize: 14,
		color: "#666",
		lineHeight: 20,
	},
});

export default PromotionCard;
