// BrandCard.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { brandImages } from "./BrandImages"; // Import hình ảnh từ BrandImages.js

const BrandCard = ({ brand }) => {
	const imageSource = brandImages[brand.image]; // Lấy hình ảnh theo tên từ brand.image

	return (
		<View style={styles.card}>
			<Image source={imageSource} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 100,
		height: 120,
		backgroundColor: "white",
		borderRadius: 10,
		margin: 10,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%", // Chiếm hết chiều rộng card
		height: "100%", // Chiếm hết chiều cao card
		resizeMode: "cover", // Đảm bảo hình ảnh fit đầy card mà không để lại khoảng trống
	},
});

export default BrandCard;
