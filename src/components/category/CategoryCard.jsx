// CategoryCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Màu sắc cho các loại danh mục, giảm độ nổi bật
const categoryColors = {
	"Sửa rửa mặt": "#FADCD9", // Màu hồng nhạt
	"Xịt khoáng": "#D6EAF8", // Màu xanh nhạt
	"Dưỡng ẩm": "#D5F5E3", // Màu xanh lá nhạt
	"Kem chống nắng": "#FDFEFE", // Màu kem nhạt
	Toner: "#FDEBD0", // Màu vàng nhạt
	"Tẩy trang": "#FCF3CF", // Màu vàng nhạt hơn
	"Tẩy tế bào chết": "#F2E2D2", // Màu be nhạt
	"Kem trị mụn": "#F9E79F", // Màu vàng sáng
	Serum: "#D5DBDB", // Màu xám nhạt
	"Mặt nạ": "#E8DAEF", // Màu tím nhạt
};

const CategoryCard = ({ category }) => {
	return (
		<View
			style={[
				styles.card,
				{ backgroundColor: categoryColors[category.name] || "#FFFFFF" }, // Chọn màu cho từng danh mục
			]}
		>
			{/* Nửa trên của card: Hình ảnh sản phẩm */}
			<View style={styles.imageContainer}>
				<Image source={{ uri: category.image }} style={styles.image} />
			</View>

			{/* Nửa dưới của card: Tiêu đề của danh mục */}
			<View style={styles.titleContainer}>
				<Text style={styles.categoryName}>{category.name}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 120, // Thu nhỏ hơn so với ProductCard
		height: 160, // Thu nhỏ chiều cao
		backgroundColor: "white",
		borderRadius: 10,
		margin: 5, // Giảm khoảng cách giữa các card
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	imageContainer: {
		flex: 2, // Chiếm 2/3 chiều cao card
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
	titleContainer: {
		flex: 1, // Chiếm 1/3 chiều cao card
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 5,
	},
	categoryName: {
		fontSize: 15, // Giảm kích thước chữ cho tiêu đề
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default CategoryCard;
