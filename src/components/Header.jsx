import React, { useState, useEffect } from "react";
import {
	View,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const Header = () => {
	const navigation = useNavigation(); // Sử dụng useNavigation để điều hướng
	const [cartItemCount, setCartItemCount] = useState(0);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				let cartItems = await AsyncStorage.getItem("cartItems");
				cartItems = cartItems ? JSON.parse(cartItems) : [];
				setCartItemCount(cartItems.length);
			} catch (error) {
				console.error("Error fetching cart items", error);
			}
		};

		fetchCartItems();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.headerContent}>
				<Image
					source={require("../../assets/images/logo/logo-removebg.png")} // Đảm bảo có file logo.png trong thư mục assets
					style={styles.logo}
				/>

				<View style={styles.searchContainer}>
					<Ionicons name="search" size={20} color="#666" />
					<TextInput
						style={styles.searchInput}
						placeholder="Tìm kiếm sản phẩm..."
						placeholderTextColor="#999"
					/>
				</View>

				<TouchableOpacity
					style={styles.cartButton}
					onPress={() => navigation.navigate("MyCart")} // Điều hướng đến MyCart
				>
					<Ionicons name="cart-outline" size={24} color="#1E3A5F" />
					{cartItemCount > 0 && (
						<View style={styles.badge}>
							<Text style={styles.badgeText}>
								{cartItemCount}
							</Text>
						</View>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	headerContent: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 12,
		gap: 12,
	},
	logo: {
		width: 35,
		height: 35,
		resizeMode: "contain",
	},
	searchContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		borderRadius: 12,
		paddingHorizontal: 12,
		height: 40,
		gap: 8,
	},
	searchInput: {
		flex: 1,
		fontSize: 14,
		color: "#333",
		paddingVertical: 8,
	},
	cartButton: {
		position: "relative",
		padding: 5,
	},
	badge: {
		position: "absolute",
		top: -5,
		right: -5,
		backgroundColor: "#FF5252",
		minWidth: 18,
		height: 18,
		borderRadius: 9,
		justifyContent: "center",
		alignItems: "center",
	},
	badgeText: {
		color: "#fff",
		fontSize: 11,
		fontWeight: "600",
	},
});

export default Header;
