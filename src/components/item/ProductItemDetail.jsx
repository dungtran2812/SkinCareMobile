import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
	Alert,
	ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";
import { useAddToCartMutation } from "../../services/skincare.service";

const ProductItemDetail = ({ route }) => {
	const navigation = useNavigation();
	const [addToCart, { isLoading }] = useAddToCartMutation();
	const { product } = route.params;
	const discountedPrice =
		product.price * (1 - product.productDiscount / 100);

	const handleAddToCart = async () => {
		const cartItem = {
			productId: product._id,
			quantity: 1, // Default quantity
		};

		try {
			console.log(cartItem)
			await addToCart(cartItem).unwrap();
			Alert.alert("Thông báo", "Sản phẩm đã được thêm vào giỏ hàng!");
		} catch (error) {
			console.error("Add to cart error:", error);
			Alert.alert("Thông báo", "Thêm sản phẩm vào giỏ hàng thất bại!");
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name="arrow-back-outline"
							size={24}
							color="#000"
						/>
					</TouchableOpacity>
					<Text style={styles.title}>Chi tiết sản phẩm</Text>
					<TouchableOpacity style={styles.moreOptions}>
						<Ionicons
							name="ellipsis-vertical"
							size={24}
							color="#000"
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: product.image }}
						style={styles.productImage}
						onError={(e) => console.log(e.nativeEvent.error)}
					/>
					<Text style={styles.discountTag}>-{product.productDiscount}%</Text>
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.priceContainer}>
						<Text style={styles.discountedPrice}>
							{parseInt(discountedPrice).toLocaleString("vi-VN")}{" "}
							VNĐ
						</Text>
						<Text style={styles.originalPrice}>
							{parseInt(product.price).toLocaleString(
								"vi-VN"
							)}{" "}
							VNĐ
						</Text>
					</View>
					<Text style={styles.productName}>{product.name}</Text>
					<Text style={styles.brandName}>
						Thương hiệu: {product.brand}
					</Text>
					<Text style={styles.productDetail}>
						Xuất sứ thương hiệu: {product.origin}
					</Text>
					<Text style={styles.productDetail}>
						Hướng dẫn sử dụng: {product.usage}
					</Text>
					<Text style={styles.productDetail}>
						Thành phần: {product.ingredients}
					</Text>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.addButton} onPress={handleAddToCart} disabled={isLoading}>
					{isLoading ? (
						<ActivityIndicator color="white" />
					) : (
						<Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollContainer: {
		padding: 15,
		paddingBottom: 100, // Để tránh nội dung bị che bởi các nút
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
	},
	moreOptions: {
		padding: 5,
	},
	imageContainer: {
		position: "relative",
	},
	productImage: {
		width: "100%",
		height: 300,
		borderRadius: 8,
		marginBottom: 20,
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
		fontSize: 20,
		color: "red",
		fontWeight: "bold",
	},
	originalPrice: {
		fontSize: 16,
		color: "gray",
		textDecorationLine: "line-through",
	},
	brandName: {
		fontSize: 16,
		color: "#555",
		marginTop: 5,
	},
	productName: {
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 5,
	},
	productDetail: {
		fontSize: 16,
		color: "#555",
		marginTop: 5,
	},
	ratingContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},
	rating: {
		fontSize: 18,
		color: "#FFD700",
	},
	salesContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	sales: {
		fontSize: 16,
		color: "#555",
	},
	cartIcon: {
		marginRight: 5,
	},
	buttonContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
	addButton: {
		flex: 1,
		backgroundColor: "#1E90FF",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
		marginLeft: 10,
	},
	favoriteButton: {
		backgroundColor: "#fff",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E53935",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ProductItemDetail;
