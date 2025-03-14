import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const ProductItemDetail = ({ route }) => {
	const navigation = useNavigation();
	const { product } = route.params;
	const discountedPrice =
		product.originalPrice * (1 - product.discount / 100);
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavoritePress = async () => {
		setIsFavorite(!isFavorite);
		try {
			let favourites = await AsyncStorage.getItem("favourites");
			favourites = favourites ? JSON.parse(favourites) : [];
			if (!isFavorite) {
				// Thêm sản phẩm vào danh sách yêu thích
				favourites.push(product);
			} else {
				// Xóa sản phẩm khỏi danh sách yêu thích
				favourites = favourites.filter(
					(item) => item.id !== product.id
				);
			}
			await AsyncStorage.setItem(
				"favourites",
				JSON.stringify(favourites)
			);
		} catch (error) {
			console.error("Error handling favourites", error);
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
						source={{ uri: product.image.uri }}
						style={styles.productImage}
						onError={(e) => console.log(e.nativeEvent.error)}
					/>
					<Text style={styles.discountTag}>-{product.discount}%</Text>
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.priceContainer}>
						<Text style={styles.discountedPrice}>
							{parseInt(discountedPrice).toLocaleString("vi-VN")}{" "}
							VNĐ
						</Text>
						<Text style={styles.originalPrice}>
							{parseInt(product.originalPrice).toLocaleString(
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
						Loại da: {product.skinType}
					</Text>
					<Text style={styles.productDetail}>
						Hướng dẫn sử dụng: {product.usageInstructions}
					</Text>
					<Text style={styles.productDetail}>
						Thành phần: {product.ingredients}
					</Text>
					<View style={styles.ratingContainer}>
						<Text style={styles.rating}>{product.rating} ★</Text>
						<View style={styles.salesContainer}>
							<Text style={styles.sales}>
								<Text style={styles.cartIcon}>🛒</Text>{" "}
								{product.monthlySales}/tháng
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.favoriteButton}
					onPress={handleFavoritePress}
				>
					<Ionicons
						name={isFavorite ? "heart" : "heart-outline"}
						size={24}
						color={isFavorite ? "#E53935" : "#000"}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.addButton}>
					<Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
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
