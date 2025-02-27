import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PromotionCard = ({ content }) => {
	// Chuyển đổi ngày tháng từ string sang định dạng cần thiết (nếu cần)
	const date = new Date(content.date);
	const formattedDate = `${date.getDate()}/${
		date.getMonth() + 1
	}/${date.getFullYear()} - ${date.getHours()}:${String(
		date.getMinutes()
	).padStart(2, "0")}`; //cập nhật sao cho số phút vẫn hiện 2 chữ số

	return (
		<View style={styles.card}>
			<Image source={{ uri: content.image }} style={styles.image} />
			<Text style={styles.title}>{content.title}</Text>
			<Text style={styles.description}>{content.description}</Text>
			<Text style={styles.date}>{formattedDate}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		borderRadius: 10,
		marginBottom: 15,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
	},
	image: {
		width: "100%",
		height: 150,
		borderRadius: 10,
		resizeMode: "cover",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 5,
	},
	description: {
		fontSize: 14,
		color: "#555",
	},
	date: {
		fontSize: 12,
		color: "#888", // Màu xám cho ngày tháng
		marginTop: 10,
	},
});

export default PromotionCard;
