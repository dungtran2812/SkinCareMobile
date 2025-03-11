import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Icon thư viện Ionicons
import { useNavigation } from "@react-navigation/native";

export default function OrderHeader({ setStatus }) {
	const navigation = useNavigation();
	// Chuyển đến màn hình OrderStatusScreen và truyền tham số trạng thái đơn hàng
	const handleNavigate = (status) => {
		navigation.navigate("OrderStatus", { status }); // Truyền trạng thái đơn hàng vào params
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Đơn hàng</Text>
				<TouchableOpacity onPress={() => handleNavigate("allOrders")}>
					<Text style={styles.viewAll}>Xem tất cả đơn hàng</Text>
				</TouchableOpacity>
			</View>

			{/* Order Status Components */}
			<View style={styles.orderStatusContainer}>
				<TouchableOpacity
					style={styles.statusItem}
					onPress={() => handleNavigate("newOrders")}
				>
					<Ionicons
						name="newspaper-outline"
						size={24}
						color="#1E3A5F"
					/>
					<Text style={styles.statusText}>Mới đặt</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.statusItem}
					onPress={() => handleNavigate("processingOrders")}
				>
					<Ionicons name="reload-outline" size={24} color="#1E3A5F" />
					<Text style={styles.statusText}>Đang xử lý</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.statusItem}
					onPress={() => handleNavigate("successOrders")}
				>
					<Ionicons
						name="checkmark-done-outline"
						size={24}
						color="#1E3A5F"
					/>
					<Text style={styles.statusText}>Thành công</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.statusItem}
					onPress={() => handleNavigate("canceledOrders")}
				>
					<Ionicons
						name="close-circle-outline"
						size={24}
						color="#1E3A5F"
					/>
					<Text style={styles.statusText}>Đã huỷ</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 10,
		backgroundColor: "#fff", // Màu nền trắng cho container
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E3A5F",
	},
	viewAll: {
		fontSize: 14,
		color: "#1E90FF", // Màu xanh cho "Xem tất cả"
	},
	orderStatusContainer: {
		flexDirection: "row", // Đặt các phần tử theo chiều ngang
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	statusItem: {
		alignItems: "center",
		padding: 10,
		flex: 1,
	},
	statusText: {
		fontSize: 12,
		color: "#1E3A5F",
		marginTop: 5,
	},
});
