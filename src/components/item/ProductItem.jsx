import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ product }) => {
	const navigation = useNavigation();
	const discountedPrice = product.price * (1 - product.productDiscount / 100);

	const handlePress = () => {
		navigation.navigate("ProductItemDetail", { product });
	};

	return (
		<TouchableOpacity style={styles.card} onPress={handlePress}>
			{/* Phần trên của card: Hình ảnh và tag giảm giá */}
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: product.image }}
					style={styles.image}
					onError={(e) => console.log(e.nativeEvent.error)}
				/>
				<Text style={styles.discountTag}>
					-{product.productDiscount}%
				</Text>
			</View>

			{/* Phần dưới của card: Thông tin sản phẩm */}
			<View style={styles.infoContainer}>
				<View style={styles.priceContainer}>
					<Text style={styles.discountedPrice}>
						{parseInt(discountedPrice).toLocaleString("vi-VN")} VNĐ
					</Text>
					<Text style={styles.originalPrice}>
						{parseInt(product.price).toLocaleString("vi-VN")} VNĐ
					</Text>
				</View>
				<Text style={styles.brandName}>{product.brand}</Text>
				<Text style={styles.productName}>{product.name}</Text>
				<View style={styles.ratingContainer}></View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 180, // Set width cố định thay vì % để tránh bị giãn quá nhiều
		marginRight: 10, // Thêm khoảng cách giữa các card (thay vì margin auto)
		marginBottom: 20,
		backgroundColor: "white",
		borderRadius: 10,
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	imageContainer: {
		position: "relative",
	},
	image: {
		width: "100%",
		height: 180,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		resizeMode: "cover",
	},
	discountTag: {
		position: "absolute",
		top: 10,
		right: 10,
		backgroundColor: "red",
		color: "white",
		paddingHorizontal: 5,
		paddingVertical: 3,
		borderRadius: 5,
		fontWeight: "bold",
	},
	infoContainer: {
		padding: 10,
	},
	priceContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	discountedPrice: {
		fontSize: 15,
		color: "red",
		fontWeight: "bold",
	},
	originalPrice: {
		fontSize: 10,
		color: "gray",
		textDecorationLine: "line-through",
	},
	brandName: {
		fontSize: 12,
		color: "#555",
		marginTop: 5,
	},
	productName: {
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 5,
	},
	ratingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	rating: {
		fontSize: 14,
		color: "#FFD700",
	},
	salesContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	sales: {
		fontSize: 12,
		color: "#555",
	},
	cartIcon: {
		marginRight: 5,
	},
});

export default ProductItem;
