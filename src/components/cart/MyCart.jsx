import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import { useGetCartInforQuery, useRemoveCartItemMutation, useUpdateQuantityMutation } from "../../services/skincare.service";

const MyCart = () => {
	const navigation = useNavigation();
	const { data: cardData = [], isLoading, isError } = useGetCartInforQuery(); 
	const [removeCartItem] = useRemoveCartItemMutation();
	const [updateQuantity] = useUpdateQuantityMutation();
	const cartItems = cardData.data?.products;

	const handleDeleteItem = async(id) => {
		Alert.alert(
			"Xóa sản phẩm",
			"Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?",
			[
				{ text: "Hủy", style: "cancel" },
				{ text: "Xóa", onPress: async() => { await removeCartItem({ productIds: id}) }, style: "destructive" },
			]
		);
	};

	const handlePurchase = () => {
		// Logic for handling purchase of selected items
	};

	const renderItem = ({ item }) => (
		<View style={styles.cartItem}>
			<TouchableOpacity style={styles.productImageContainer} onPress={() => navigation.navigate("ProductItemDetail", { product: item })}>
				<Image source={{ uri: item.image }} style={styles.productImage} />
			</TouchableOpacity>
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.discountedPrice}>{(item.price * (1 - item.discount / 100)).toLocaleString("vi-VN")}đ</Text>
					<Text style={styles.originalPrice}>{item.price.toLocaleString("vi-VN")}đ</Text>
				</View>
				<View style={styles.quantityContainer}>
					<TouchableOpacity style={styles.quantityButton} onPress={() => {updateQuantity({ productId: item.productId, quantity: item.quantity - 1 })}}>
						<Text style={styles.quantityButtonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.quantityText}>{item.quantity}</Text>
					<TouchableOpacity style={styles.quantityButton} onPress={() => {updateQuantity({ productId: item.productId, quantity: item.quantity + 1 })}}>
						<Text style={styles.quantityButtonText}>+</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.swipeHint}>Swipe left to delete</Text>
			</View>
		</View>
	);

	const renderHiddenItem = ({ item }) => (
		<View style={styles.hiddenItem}>
			<TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.productId)}>
				<FontAwesome name="trash" size={24} color="#fff" />
			</TouchableOpacity>
		</View>
	);

	if (isLoading) return <View style={styles.container}><Text>Loading...</Text></View>;
	if (isError) return <View style={styles.container}><Text>There was an error loading your cart.</Text></View>;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<FontAwesome name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.title}>Giỏ hàng của tôi</Text>
			</View>
			<SwipeListView
				data={cartItems}
				renderItem={renderItem}
				renderHiddenItem={renderHiddenItem}
				keyExtractor={(item) => item.productId}
				rightOpenValue={-75}
				contentContainerStyle={styles.cartList}
			/>
			<View style={styles.footer}>
				<View style={styles.totalContainer}>
					<Text style={styles.totalText}>Tổng thanh toán:</Text>
					<Text style={styles.totalAmount}>{cardData.data.totalPrice.toLocaleString("vi-VN")}đ</Text>
					<TouchableOpacity
						style={[styles.purchaseButton, { backgroundColor: "#1E90FF"}]}
						onPress={handlePurchase}
					>
						<Text style={styles.purchaseButtonText}>Mua hàng</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#fff", paddingTop: 20 },
	header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 20 },
	title: { fontSize: 24, fontWeight: "bold", textAlign: "center", flex: 1 },
	cartList: { paddingHorizontal: 20 },
	cartItem: { flexDirection: "row", alignItems: "center", marginBottom: 20, backgroundColor: "#fff", padding: 10, borderRadius: 10 },
	productImageContainer: { marginLeft: 10 },
	productImage: { width: 80, height: 80, borderRadius: 10 },
	productInfo: { flex: 1, marginLeft: 10 },
	productName: { fontSize: 16, fontWeight: "bold" },
	priceContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
	originalPrice: { fontSize: 14, color: "#888", textDecorationLine: "line-through", marginRight: 5 },
	discountedPrice: { fontSize: 16, fontWeight: "bold", color: "#E53935" },
	quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
	quantityButton: { width: 30, height: 30, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", borderRadius: 5 },
	quantityButtonText: { fontSize: 18, fontWeight: "bold" },
	quantityText: { fontSize: 16, marginHorizontal: 10 },
	footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, borderTopWidth: 1, borderTopColor: "#ddd" },
	selectAllContainer: { flexDirection: "row", alignItems: "center" },
	selectAllText: { fontSize: 16, marginLeft: 10 },
	totalContainer: { alignItems: "flex-end" },
	totalText: { fontSize: 16, fontWeight: "bold" },
	totalAmount: { fontSize: 18, fontWeight: "bold", color: "#E53935", marginVertical: 5 },
	purchaseButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
	purchaseButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
	hiddenItem: { alignItems: "flex-end", backgroundColor: "#fff", flex: 1, marginBottom: 20, paddingRight: 15, borderRadius: 10 },
	deleteButton: { backgroundColor: "#FF3B30", justifyContent: "center", alignItems: "center", width: 75, height: "100%", borderRadius: 10 },
	swipeHint: { fontSize: 12, color: "#888", marginTop: 5 },
});

export default MyCart;
