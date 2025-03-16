import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Màu sắc cho các loại da
const leatherColors = {
	"Da dầu": "#FF6347", // Màu đỏ
	"Da thường": "#32CD32", // Màu xanh lá
	"Da khô": "#1E90FF", // Màu xanh dương
	"Da hỗn hợp": "#FFD700", // Màu vàng
};

const ProductCard = ({ product }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate("ProductItemDetail", { product });
	};

	// Tính giá sau khi giảm
	const discountedPrice = (
		product.price *
		(1 - product.productDiscount / 100)
	).toFixed(0);

	return (
		<TouchableOpacity style={styles.card} onPress={handlePress}>
			{/* Nửa trên của card: Hình ảnh sản phẩm và giảm giá */}
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: product.image }}
					style={styles.image}
				/>
				<Text style={styles.discount}>{`-${product.productDiscount}%`}</Text>
			</View>

			{/* Nửa dưới của card: Giá và tên sản phẩm */}
			<View style={styles.infoContainer}>
				{/* Giá sau khi giảm */}
				<Text style={styles.discountedPrice}>
					{parseInt(discountedPrice).toLocaleString("vi-VN")} VNĐ
				</Text>
				{/* Giá gốc */}
				<Text style={styles.originalPrice}>
					{parseInt(product.price).toLocaleString("vi-VN")}{" "}
					VNĐ
				</Text>

				{/* Tên sản phẩm */}
				<Text style={styles.productName}>{product.name}</Text>

				{/* Tag loại da */}
				<View
					style={[
						styles.tag,
						{
							backgroundColor:
								leatherColors[product.tag] || "#D3D3D3", // Màu sắc cho tag, mặc định là màu xám nếu không có
						},
					]}
				>
					<Text style={styles.tagText}>{product.category.name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 150,
		height: 250,
		backgroundColor: "white",
		borderRadius: 10,
		margin: 10,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		padding: 10,
	},
	imageContainer: {
		flex: 2, // Chiếm 2/3 chiều cao card
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
	discount: {
		position: "absolute",
		top: 1,
		right: 1,
		backgroundColor: "red",
		color: "white",
		paddingHorizontal: 5,
		paddingVertical: 3,
		borderRadius: 8,
		fontWeight: "bold",
	},
	infoContainer: {
		flex: 1, // Chiếm 1/3 chiều cao card
		alignItems: "flex-start", // Căn trái cho tất cả nội dung
	},
	discountedPrice: {
		fontSize: 16, // Giá sau khi giảm sẽ bự hơn
		color: "red",
		fontWeight: "bold",
	},
	originalPrice: {
		fontSize: 11,
		color: "gray",
		textDecorationLine: "line-through",
	},
	productName: {
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "left", // Căn trái tên sản phẩm
		marginTop: 5,
	},
	tag: {
		paddingVertical: 3,
		paddingHorizontal: 8,
		borderRadius: 5,
		marginTop: 5,
	},
	tagText: {
		fontSize: 12,
		color: "white",
	},
});

export default ProductCard;
