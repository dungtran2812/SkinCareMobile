import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import OrderHeader from "./OrderHeader"; // Import OrderHeader

// Giả sử dữ liệu cho các đơn hàng của từng trạng thái
const orderData = {
	newOrders: [
		{ id: "1", orderAmount: 320000, points: 32 },
		{ id: "2", orderAmount: 150000, points: 15 },
	],
	processingOrders: [{ id: "3", orderAmount: 500000, points: 50 }],
	successOrders: [{ id: "4", orderAmount: 200000, points: 20 }],
	canceledOrders: [{ id: "5", orderAmount: 450000, points: 45 }],
	allOrders: [
		{ id: "1", orderAmount: 320000, points: 32 },
		{ id: "2", orderAmount: 150000, points: 15 },
		{ id: "3", orderAmount: 500000, points: 50 },
		{ id: "4", orderAmount: 200000, points: 20 },
		{ id: "5", orderAmount: 450000, points: 45 },
	],
};

const OrderStatusScreen = () => {
	const [status, setStatus] = useState("newOrders"); // Trạng thái mặc định là Mới đặt

	// Hàm render đơn hàng
	const renderOrderList = (orders) => {
		return orders.map((order) => (
			<View key={order.id} style={styles.orderItem}>
				<Text style={styles.orderText}>
					Đơn hàng {order.orderAmount.toLocaleString()} VNĐ
				</Text>
				<Text style={styles.orderText}>
					Tích được {order.points} điểm
				</Text>
			</View>
		));
	};

	return (
		<View style={styles.container}>
			<OrderHeader setStatus={setStatus} />{" "}
			{/* Truyền setStatus để cập nhật trạng thái */}
			<View style={styles.orderContainer}>
				{status === "allOrders" && renderOrderList(orderData.allOrders)}
				{status === "newOrders" && renderOrderList(orderData.newOrders)}
				{status === "processingOrders" &&
					renderOrderList(orderData.processingOrders)}
				{status === "successOrders" &&
					renderOrderList(orderData.successOrders)}
				{status === "canceledOrders" &&
					renderOrderList(orderData.canceledOrders)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	orderItem: {
		padding: 15,
		marginBottom: 10,
		backgroundColor: "#fff", // Nền trắng cho mỗi đơn hàng
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ddd", // Viền xám
	},
	orderText: {
		fontSize: 16,
		color: "#000", // Chữ màu đen
	},
	orderContainer: {
		flex: 1,
		padding: 10,
	},
});

export default OrderStatusScreen;
