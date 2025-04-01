import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
	TextInput,
	Modal,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import {
	useCreateOrderMutation,
	useGetCartInforQuery,
	useRemoveCartItemMutation,
	useUpdateQuantityMutation,
} from "../../services/skincare.service";

const MyCart = () => {
	const navigation = useNavigation();
	const { data: cartData = [], isLoading, isError } = useGetCartInforQuery();
	const [createOrder] = useCreateOrderMutation();
	const [removeCartItem] = useRemoveCartItemMutation();
	const [updateQuantity] = useUpdateQuantityMutation();
	const cartItems = cartData.data?.products || [];
	const [selectedItems, setSelectedItems] = useState([]);
	const [address, setAddress] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const handleDeleteItem = async (id) => {
		Alert.alert(
			"Xóa sản phẩm",
			"Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?",
			[
				{ text: "Hủy", style: "cancel" },
				{
					text: "Xóa",
					onPress: async () => {
						await removeCartItem({ productIds: id });
					},
					style: "destructive",
				},
			]
		);
	};

	const handleSelectItem = (product) => {
		if (selectedItems.some(item => item.productId === product.productId)) {
			setSelectedItems(selectedItems.filter(item => item.productId !== product.productId));
		} else {
			setSelectedItems([...selectedItems, product]);
		}
	};

	const handleSelectAll = () => {
		if (selectedItems.length === cartItems.length) {
			setSelectedItems([]);
		} else {
			setSelectedItems(cartItems);
		}
	};

	const handlePurchase = () => {
		setModalVisible(true);
	};

	const handleConfirmOrder = async () => {
		const productsToOrder = selectedItems.map(item => ({
			productId: item.productId,
			quantity: item.quantity,
		}));

		try {
			await createOrder({ products: productsToOrder, address }).unwrap();
			Alert.alert("Đặt hàng thành công!", "Cảm ơn bạn đã đặt hàng.");
			setModalVisible(false);
			setSelectedItems([]);
			navigation.goBack()
		} catch (error) {
			console.error("Error creating order:", error);
			Alert.alert("Lỗi", "Đặt hàng không thành công. Vui lòng thử lại.");
		}
	};

	const renderItem = ({ item }) => (
		<View style={styles.cartItem}>
			<Checkbox.Android
				status={selectedItems.some(selectedItem => selectedItem.productId === item.productId) ? "checked" : "unchecked"}
				onPress={() => handleSelectItem(item)}
				color="#1E3A5F"
			/>
			<TouchableOpacity
				style={styles.productImageContainer}
				onPress={() =>
					navigation.navigate("ProductItemDetail", { product: item })
				}
			>
				<Image
					source={{ uri: item.image }}
					style={styles.productImage}
				/>
			</TouchableOpacity>
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.discountedPrice}>
						{(item.price * (1 - item.discount / 100)).toLocaleString("vi-VN")}đ
					</Text>
					<Text style={styles.originalPrice}>
						{item.price.toLocaleString("vi-VN")}đ
					</Text>
				</View>
				<View style={styles.quantityContainer}>
					<TouchableOpacity
						style={styles.quantityButton}
						onPress={() => {
							if (item.quantity > 1) {
								updateQuantity({
									productId: item.productId,
									quantity: item.quantity - 1,
								});
							}
						}}
						disabled={item.quantity <= 1}
					>
						<Text style={styles.quantityButtonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.quantityText}>{item.quantity}</Text>
					<TouchableOpacity
						style={styles.quantityButton}
						onPress={() => {
							updateQuantity({
								productId: item.productId,
								quantity: item.quantity + 1,
							});
						}}
					>
						<Text style={styles.quantityButtonText}>+</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.swipeHint}>Swipe left to delete</Text>
			</View>
		</View>
	);

	const renderHiddenItem = ({ item }) => (
		<View style={styles.hiddenItem}>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() => handleDeleteItem(item.productId)}
			>
				<FontAwesome name="trash" size={24} color="#fff" />
			</TouchableOpacity>
		</View>
	);

	const renderSelectAll = () => (
		<View style={styles.selectAllContainer}>
			<Checkbox.Android
				status={selectedItems.length === cartItems.length ? "checked" : "unchecked"}
				onPress={handleSelectAll}
				color="#1E3A5F"
			/>
			<Text style={styles.selectAllText}>Chọn tất cả</Text>
		</View>
	);

	if (isLoading)
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	if (isError)
		return (
			<View style={styles.container}>
				<Text>There was an error loading your cart.</Text>
			</View>
		);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<FontAwesome name="arrow-left" size={20} color="#1E3A5F" />
				</TouchableOpacity>
				<Text style={styles.title}>Giỏ hàng của tôi</Text>
				<View style={styles.placeholder} />
			</View>

			<SwipeListView
				data={cartItems}
				renderItem={({ item }) => (
					<View style={styles.cartItem}>
						<Checkbox.Android
							status={
								selectedItems.includes(item.productId)
									? "checked"
									: "unchecked"
							}
							onPress={() => handleSelectItem(item.productId)}
							color="#1E3A5F"
						/>
						<TouchableOpacity
							style={styles.productImageContainer}
							onPress={() =>
								navigation.navigate("ProductItemDetail", {
									product: item,
								})
							}
						>
							<Image
								source={{ uri: item.image }}
								style={styles.productImage}
							/>
						</TouchableOpacity>
						<View style={styles.productInfo}>
							<Text style={styles.productName} numberOfLines={2}>
								{item.name}
							</Text>
							<View style={styles.priceContainer}>
								<Text style={styles.discountedPrice}>
									{(
										item.price *
										(1 - item.discount / 100)
									).toLocaleString("vi-VN")}
									đ
								</Text>
								{item.discount > 0 && (
									<Text style={styles.originalPrice}>
										{item.price.toLocaleString("vi-VN")}đ
									</Text>
								)}
							</View>
							<View style={styles.quantityContainer}>
								<TouchableOpacity
									style={styles.quantityButton}
									onPress={() =>
										updateQuantity({
											productId: item.productId,
											quantity: item.quantity - 1,
										})
									}
									disabled={item.quantity <= 1}
								>
									<Text
										style={[
											styles.quantityButtonText,
											item.quantity <= 1 &&
												styles.disabledButton,
										]}
									>
										-
									</Text>
								</TouchableOpacity>
								<Text style={styles.quantityText}>
									{item.quantity}
								</Text>
								<TouchableOpacity
									style={styles.quantityButton}
									onPress={() =>
										updateQuantity({
											productId: item.productId,
											quantity: item.quantity + 1,
										})
									}
								>
									<Text style={styles.quantityButtonText}>
										+
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
				renderHiddenItem={({ item }) => (
					<View style={styles.hiddenItem}>
						<TouchableOpacity
							style={styles.deleteButton}
							onPress={() => handleDeleteItem(item.productId)}
						>
							<FontAwesome name="trash" size={20} color="#fff" />
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item) => item.productId}
				rightOpenValue={-75}
				contentContainerStyle={styles.cartList}
			/>

			<View style={styles.footer}>
				<View style={styles.footerContent}>
					<View style={styles.footerRow}>
						<View style={styles.leftSection}>
							{renderSelectAll()}
						</View>
						<View style={styles.rightSection}>
							<Text style={styles.totalText}>
								Tổng thanh toán:
							</Text>
							<Text style={styles.totalAmount}>
								{selectedItems.length > 0
									? selectedItems.reduce(
										(acc, item) =>
											acc +
											item.price *
											(1 - item.discount / 100) *
											item.quantity,
										0
									).toLocaleString("vi-VN")
									: 0}
								đ
							</Text>
							<TouchableOpacity
								style={[styles.purchaseButton, {
									backgroundColor: selectedItems.length ? "#1E90FF" : "#ccc",
								}]}
								onPress={handlePurchase}
								disabled={selectedItems.length === 0}
							>
								<Text style={styles.purchaseButtonText}>
									Mua hàng
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.totalLabel}>Tổng thanh toán:</Text>
					<Text style={styles.totalAmount}>
						{selectedItems.length > 0
							? cartItems
									.filter((item) =>
										selectedItems.includes(item.productId)
									)
									.reduce(
										(acc, item) =>
											acc +
											item.price *
												(1 - item.discount / 100) *
												item.quantity,
										0
									)
									.toLocaleString("vi-VN")
							: 0}
						đ
					</Text>
					<TouchableOpacity
						style={[
							styles.purchaseButton,
							!selectedItems.length &&
								styles.disabledPurchaseButton,
						]}
						onPress={handlePurchase}
						disabled={!selectedItems.length}
					>
						<Text style={styles.purchaseButtonText}>
							Mua hàng ({selectedItems.length})
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>Nhập địa chỉ giao hàng</Text>
						<TextInput
							style={styles.addressInput}
							placeholder="Địa chỉ giao hàng"
							value={address}
							onChangeText={setAddress}
						/>
						<View style={styles.modalButtons}>
							<TouchableOpacity
								style={styles.modalButton}
								onPress={handleConfirmOrder}
							>
								<Text style={styles.modalButtonText}>Xác nhận</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.modalButton}
								onPress={() => setModalVisible(false)}
							>
								<Text style={styles.modalButtonText}>Hủy</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F8F9FA",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 15,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#E9ECEF",
	},
	backButton: {
		padding: 8,
	},
	title: {
		flex: 1,
		fontSize: 18,
		fontWeight: "600",
		color: "#1E3A5F",
		textAlign: "center",
	},
	placeholder: {
		width: 36,
	},
	cartList: {
		paddingHorizontal: 15,
		paddingTop: 10,
	},
	cartItem: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 12,
		marginBottom: 10,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E9ECEF",
	},
	productImageContainer: {
		marginHorizontal: 10,
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	productInfo: {
		flex: 1,
	},
	productName: {
		fontSize: 14,
		fontWeight: "500",
		color: "#1E3A5F",
		marginBottom: 6,
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	discountedPrice: {
		fontSize: 15,
		fontWeight: "600",
		color: "#E53935",
		marginRight: 8,
	},
	originalPrice: {
		fontSize: 13,
		color: "#ADB5BD",
		textDecorationLine: "line-through",
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	quantityButton: {
		width: 28,
		height: 28,
		backgroundColor: "#F8F9FA",
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	quantityButtonText: {
		fontSize: 16,
		color: "#1E3A5F",
		fontWeight: "600",
	},
	disabledButton: {
		color: "#ADB5BD",
	},
	quantityText: {
		marginHorizontal: 12,
		fontSize: 15,
		color: "#1E3A5F",
		fontWeight: "500",
	},
	hiddenItem: {
		alignItems: "flex-end",
		backgroundColor: "transparent",
		marginBottom: 10,
	},
	deleteButton: {
		backgroundColor: "#FF3B30",
		width: 65,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	footer: {
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#E9ECEF",
		paddingHorizontal: 15,
		paddingVertical: 12,
	},
	selectAllContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	selectAllText: {
		fontSize: 14,
		color: "#1E3A5F",
		marginLeft: 8,
	},
	totalContainer: {
		alignItems: "flex-end",
	},
	totalLabel: {
		fontSize: 13,
		color: "#6C757D",
		marginBottom: 4,
	},
	totalAmount: {
		fontSize: 18,
		fontWeight: "600",
		color: "#E53935",
		marginBottom: 10,
	},
	purchaseButton: {
		backgroundColor: "#1E3A5F",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		width: "100%",
		alignItems: "center",
	},
	disabledPurchaseButton: {
		backgroundColor: "#ADB5BD",
	},
	purchaseButtonText: {
		color: "#fff",
		fontSize: 15,
		fontWeight: "600",
	},
	hiddenItem: {
		alignItems: "flex-end",
		backgroundColor: "#fff",
		flex: 1,
		marginBottom: 20,
		paddingRight: 15,
		borderRadius: 10,
	},
	deleteButton: {
		backgroundColor: "#FF3B30",
		justifyContent: "center",
		alignItems: "center",
		width: 75,
		height: "100%",
		borderRadius: 10,
	},
	swipeHint: {
		fontSize: 12,
		color: "#888",
		marginTop: 5,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: "80%",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	addressInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 20,
	},
	modalButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	modalButton: {
		backgroundColor: "#1E90FF",
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginHorizontal: 5,
	},
	modalButtonText: {
		color: "white",
		textAlign: "center",
	},
});

export default MyCart;
