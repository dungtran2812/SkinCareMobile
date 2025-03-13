import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const MyCart = () => {
	const navigation = useNavigation();

	// Dữ liệu giả cho các sản phẩm trong giỏ hàng
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			name: "Kem Chống Nắng Vichy Thoáng Nhẹ Không Bóng Dầu SPF 50",
			originalPrice: 369000,
			discount: 20,
			image: {
				uri: "https://media.hcdn.vn/catalog/product/g/o/google-shopping-kem-chong-nang-vichy-thoang-nhe-khong-bong-dau-spf-50-50ml-1721901209.jpg",
			},
			quantity: 1,
			selected: false,
		},
		{
			id: 2,
			name: "Sữa Rửa Mặt Cocoon Chiết Xuất Từ Nghệ Hưng Yên 310ml",
			originalPrice: 236000,
			discount: 15,
			image: {
				uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tUWyim4_BX4oCefE60oKl3razi12Vo8PXg&s",
			},
			quantity: 2,
			selected: false,
		},
		// Thêm các sản phẩm khác
	]);

	const handleSelectItem = (id) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, selected: !item.selected } : item
			)
		);
	};

	const handleSelectAll = () => {
		const allSelected = cartItems.every((item) => item.selected);
		setCartItems((prevItems) =>
			prevItems.map((item) => ({ ...item, selected: !allSelected }))
		);
	};

	const handleQuantityChange = (id, delta) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const handlePurchase = () => {
		// Xử lý logic mua hàng
	};

	const renderItem = ({ item }) => (
		<View style={styles.cartItem}>
			<TouchableOpacity onPress={() => handleSelectItem(item.id)}>
				<FontAwesome
					name={item.selected ? "check-square" : "square-o"}
					size={24}
					color="black"
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.productImageContainer}
				onPress={() =>
					navigation.navigate("ProductItemDetail", { product: item })
				}
			>
				<Image
					source={{ uri: item.image.uri }}
					style={styles.productImage}
				/>
			</TouchableOpacity>
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.discountedPrice}>
						{(
							item.originalPrice *
							(1 - item.discount / 100)
						).toLocaleString("vi-VN")}
						đ
					</Text>
					<Text style={styles.originalPrice}>
						{item.originalPrice.toLocaleString("vi-VN")}đ
					</Text>
				</View>
				<View style={styles.quantityContainer}>
					<TouchableOpacity
						style={styles.quantityButton}
						onPress={() => handleQuantityChange(item.id, -1)}
					>
						<Text style={styles.quantityButtonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.quantityText}>{item.quantity}</Text>
					<TouchableOpacity
						style={styles.quantityButton}
						onPress={() => handleQuantityChange(item.id, 1)}
					>
						<Text style={styles.quantityButtonText}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);

	const totalAmount = cartItems
		.filter((item) => item.selected)
		.reduce(
			(sum, item) =>
				sum +
				item.quantity * item.originalPrice * (1 - item.discount / 100),
			0
		);

	const allSelected = cartItems.every((item) => item.selected);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Giỏ hàng của tôi</Text>
			<FlatList
				data={cartItems}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.cartList}
			/>
			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.selectAllContainer}
					onPress={handleSelectAll}
				>
					<FontAwesome
						name={allSelected ? "check-square" : "square-o"}
						size={24}
						color="black"
					/>
					<Text style={styles.selectAllText}>Chọn tất cả</Text>
				</TouchableOpacity>
				<View style={styles.totalContainer}>
					<Text style={styles.totalText}>Tổng thanh toán:</Text>
					<Text style={styles.totalAmount}>
						{totalAmount.toLocaleString("vi-VN")}đ
					</Text>
					<TouchableOpacity
						style={[
							styles.purchaseButton,
							{
								backgroundColor: allSelected
									? "#1E90FF"
									: "#ccc",
							},
						]}
						onPress={handlePurchase}
						disabled={!allSelected}
					>
						<Text style={styles.purchaseButtonText}>Mua hàng</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
	},
	cartList: {
		paddingHorizontal: 20,
	},
	cartItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	productImageContainer: {
		marginLeft: 10,
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
	},
	productInfo: {
		flex: 1,
		marginLeft: 10,
	},
	productName: {
		fontSize: 16,
		fontWeight: "bold",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	originalPrice: {
		fontSize: 14,
		color: "#888",
		textDecorationLine: "line-through",
		marginRight: 5,
	},
	discountedPrice: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#E53935",
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
	quantityButton: {
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		borderRadius: 5,
	},
	quantityButtonText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	quantityText: {
		fontSize: 16,
		marginHorizontal: 10,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
	selectAllContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	selectAllText: {
		fontSize: 16,
		marginLeft: 10,
	},
	totalContainer: {
		alignItems: "flex-end",
	},
	totalText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	totalAmount: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#E53935",
		marginVertical: 5,
	},
	purchaseButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	purchaseButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default MyCart;
