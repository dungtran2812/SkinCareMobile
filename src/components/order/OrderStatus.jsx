import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "react-native-vector-icons"; // Icon thư viện Ionicons
import { useRoute } from "@react-navigation/native";

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

const Tab = createMaterialTopTabNavigator();

const OrderStatus = () => {
	const route = useRoute();
	const { status } = route.params; // Lấy trạng thái đơn hàng từ tham số truyền vào

	// Chuyển tab dựa vào tham số status khi vào màn hình
	const initialTab = status || "newOrders"; // Mặc định là Mới đặt

	return (
		<Tab.Navigator initialRouteName={initialTab}>
			<Tab.Screen name="allOrders" component={AllOrders} />
			<Tab.Screen name="newOrders" component={NewOrders} />
			<Tab.Screen name="processingOrders" component={ProcessingOrders} />
			<Tab.Screen name="successOrders" component={SuccessOrders} />
			<Tab.Screen name="canceledOrders" component={CanceledOrders} />
		</Tab.Navigator>
	);
};

// Các màn hình con cho từng trạng thái đơn hàng
const renderOrderList = (orders) => {
	return orders.map((order) => (
		<View key={order.id} style={styles.orderItem}>
			<Text style={styles.orderText}>
				Đơn hàng {order.orderAmount.toLocaleString()} VNĐ
			</Text>
			<Text style={styles.orderText}>Tích được {order.points} điểm</Text>
		</View>
	));
};

const AllOrders = () => renderOrderList(orderData.allOrders);
const NewOrders = () => renderOrderList(orderData.newOrders);
const ProcessingOrders = () => renderOrderList(orderData.processingOrders);
const SuccessOrders = () => renderOrderList(orderData.successOrders);
const CanceledOrders = () => renderOrderList(orderData.canceledOrders);

const styles = StyleSheet.create({
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
});

export default OrderStatus;
