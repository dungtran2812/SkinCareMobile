import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Checkout = ({ route }) => {
	const navigation = useNavigation();
	const { cartItems } = route.params;

	const [customerName, setCustomerName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("ZaloPay");

	const handlePlaceOrder = () => {
		// Xử lý logic đặt đơn hàng
		navigation.navigate("OrderSuccess");
	};

	const isFormValid = () => {
		return (
			customerName.trim() !== "" &&
			phoneNumber.trim() !== "" &&
			address.trim() !== ""
		);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<FontAwesome name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.title}>Đơn hàng của tôi</Text>
			</View>
			<View style={styles.orderSummary}>
				<Text style={styles.sectionTitle}>Thông tin sản phẩm</Text>
				{cartItems.map((item) => (
					<View key={item.id} style={styles.productItem}>

						<Image
							source={{ uri: item.image }}
							style={styles.productImage}
						/>
						<View style={styles.productInfo}>
							<Text style={styles.productName}>{item.name}</Text>
							<Text style={styles.price}>
								{(
									item.price *
									(1 - item.discount / 100)
								).toLocaleString("vi-VN")}
								đ x {item.quantity}
							</Text>
						</View>
					</View>
				))}
			</View>
			<View style={styles.customerInfo}>
				<Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
				<TextInput
					style={styles.input}
					placeholder="Tên khách hàng"
					value={customerName}
					onChangeText={setCustomerName}
				/>
				<TextInput
					style={styles.input}
					placeholder="Số điện thoại"
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					keyboardType="phone-pad"
				/>
				<TextInput
					style={styles.input}
					placeholder="Địa chỉ"
					value={address}
					onChangeText={setAddress}
				/>
				<Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
				<View style={styles.paymentMethods}>
					<TouchableOpacity
						style={[
							styles.paymentMethod,
							paymentMethod === "ZaloPay" &&
								styles.selectedPaymentMethod,
						]}
						onPress={() => setPaymentMethod("ZaloPay")}
					>
						<Text style={styles.paymentMethodText}>ZaloPay</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.paymentMethod,
							paymentMethod === "COD" &&
								styles.selectedPaymentMethod,
						]}
						onPress={() => setPaymentMethod("COD")}
					>
						<Text style={styles.paymentMethodText}>
							Thanh toán khi nhận hàng
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.footer}>
				<Text style={styles.totalText}>Tổng thanh toán:</Text>
				<Text style={styles.totalPrice}>
					{totalPrice.toLocaleString("vi-VN")}đ
				</Text>
				<TouchableOpacity
					style={[
						styles.placeOrderButton,
						{ backgroundColor: isFormValid() ? "#1E90FF" : "#ccc" },
					]}
					onPress={handlePlaceOrder}
					disabled={!isFormValid()}
				>
					<Text style={styles.placeOrderButtonText}>Đặt đơn</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		flex: 1,
	},
	orderSummary: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	productItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
		marginRight: 10,
	},
	productInfo: {
		flex: 1,
	},
	productName: {
		fontSize: 16,
		fontWeight: "bold",
	},
	productPrice: {
		fontSize: 16,
		color: "#E53935",
	},
	customerInfo: {
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	paymentMethods: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	paymentMethod: {
		flex: 1,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		alignItems: "center",
		marginRight: 10,
	},
	selectedPaymentMethod: {
		borderColor: "#1E90FF",
		backgroundColor: "#E0F7FF",
	},
	paymentMethodText: {
		fontSize: 16,
	},
	footer: {
		alignItems: "center",
	},
	totalText: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	totalPrice: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#E53935",
		marginBottom: 20,
	},
	placeOrderButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	placeOrderButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Checkout;
