import React from "react";
import {
	View,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Header = () => {
	const navigation = useNavigation(); // Sử dụng useNavigation để điều hướng

	return (
		<View style={styles.headerContainer}>
			{/* Logo của App */}
			<Image
				source={require("../../assets/images/logo/logo-removebg.png")} // Đảm bảo có file logo.png trong thư mục assets
				style={styles.logo}
			/>

			{/* Thanh tìm kiếm */}
			<View style={styles.searchContainer}>
				<Ionicons
					name="search"
					size={20}
					color="#999"
					style={styles.searchIcon}
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="Bạn đang tìm kiếm gì?"
					placeholderTextColor="#999"
				/>
			</View>

			{/* Icon giỏ hàng */}
			<TouchableOpacity
				style={styles.cartButton}
				onPress={() => navigation.navigate("MyCart")} // Điều hướng đến MyCart
			>
				<Ionicons name="cart-outline" size={28} color="#fff" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 15,
		paddingVertical: 12,
		backgroundColor: "#B3E5FC", // Màu xanh đơn giản
		elevation: 3,
	},
	logo: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 20,
		paddingHorizontal: 10,
		flex: 1,
		height: 40,
		marginHorizontal: 10,
	},
	searchIcon: {
		marginRight: 8,
	},
	searchInput: {
		flex: 1,
		color: "#333",
	},
	cartButton: {
		padding: 5,
	},
});

export default Header;
