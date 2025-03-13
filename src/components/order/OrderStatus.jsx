import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import OrderCard from "./OrderCard"; // Import OrderCard
import { useNavigation } from "@react-navigation/native";

// Giả sử dữ liệu cho các đơn hàng của từng trạng thái
const orderData = {
	newOrders: [
		{
			id: "1",
			orderAmount: 320000,
			points: 32,
			productImage:
				"https://www.guardian.com.vn/media/catalog/product/cache/30b2b44eba57cd45fd3ef9287600968e/b/a/bao_bi_3004658-21111.jpg",
			productName:
				"Kem Dưỡng Giúp Làm Dịu, Phục Hồi Da La Roche-Posay Cicaplast Baume B5 Từ Công Nghệ Vi Sinh 40ml",
			productBrand: "LA ROCHE-POSAY",
			quantity: 1,
			oldPrice: 350000,
			newPrice: 320000,
			totalAmount: 320000,
		},
		{
			id: "2",
			orderAmount: 150000,
			points: 15,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm B",
			productBrand: "Thương hiệu B",
			quantity: 1,
			oldPrice: 180000,
			newPrice: 150000,
			totalAmount: 150000,
		},
	],
	processingOrders: [
		{
			id: "3",
			orderAmount: 500000,
			points: 50,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm C",
			productBrand: "Thương hiệu C",
			quantity: 1,
			oldPrice: 550000,
			newPrice: 500000,
			totalAmount: 500000,
		},
	],
	successOrders: [
		{
			id: "4",
			orderAmount: 200000,
			points: 20,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm D",
			productBrand: "Thương hiệu D",
			quantity: 1,
			oldPrice: 250000,
			newPrice: 200000,
			totalAmount: 200000,
		},
	],
	canceledOrders: [
		{
			id: "5",
			orderAmount: 450000,
			points: 45,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm E",
			productBrand: "Thương hiệu E",
			quantity: 1,
			oldPrice: 500000,
			newPrice: 450000,
			totalAmount: 450000,
		},
	],
	allOrders: [
		{
			id: "1",
			orderAmount: 320000,
			points: 32,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm A",
			productBrand: "Thương hiệu A",
			quantity: 1,
			oldPrice: 350000,
			newPrice: 320000,
			totalAmount: 320000,
		},
		{
			id: "2",
			orderAmount: 150000,
			points: 15,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm B",
			productBrand: "Thương hiệu B",
			quantity: 1,
			oldPrice: 180000,
			newPrice: 150000,
			totalAmount: 150000,
		},
		{
			id: "3",
			orderAmount: 500000,
			points: 50,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm C",
			productBrand: "Thương hiệu C",
			quantity: 1,
			oldPrice: 550000,
			newPrice: 500000,
			totalAmount: 500000,
		},
		{
			id: "4",
			orderAmount: 200000,
			points: 20,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm D",
			productBrand: "Thương hiệu D",
			quantity: 1,
			oldPrice: 250000,
			newPrice: 200000,
			totalAmount: 200000,
		},
		{
			id: "5",
			orderAmount: 450000,
			points: 45,
			productImage: "https://via.placeholder.com/100",
			productName: "Sản phẩm E",
			productBrand: "Thương hiệu E",
			quantity: 1,
			oldPrice: 500000,
			newPrice: 450000,
			totalAmount: 450000,
		},
	],
};

const labels = ["Mới đặt", "Đang xử lý", "Thành công", "Đã huỷ"];
const customStyles = {
	stepIndicatorSize: 30,
	currentStepIndicatorSize: 40,
	separatorStrokeWidth: 2,
	currentStepStrokeWidth: 3,
	stepStrokeCurrentColor: "#1E3A5F",
	stepStrokeWidth: 3,
	stepStrokeFinishedColor: "#1E3A5F",
	stepStrokeUnFinishedColor: "#aaaaaa",
	separatorFinishedColor: "#1E3A5F",
	separatorUnFinishedColor: "#aaaaaa",
	stepIndicatorFinishedColor: "#1E3A5F",
	stepIndicatorUnFinishedColor: "#ffffff",
	stepIndicatorCurrentColor: "#ffffff",
	stepIndicatorLabelFontSize: 15,
	currentStepIndicatorLabelFontSize: 15,
	stepIndicatorLabelCurrentColor: "#1E3A5F",
	stepIndicatorLabelFinishedColor: "#ffffff",
	stepIndicatorLabelUnFinishedColor: "#aaaaaa",
	labelColor: "#999999",
	labelSize: 13,
	currentStepLabelColor: "#1E3A5F",
};

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
	const iconConfig = {
		name: "checkmark-circle",
		color: stepStatus === "finished" ? "#ffffff" : "#1E3A5F",
		size: 20,
	};

	switch (position) {
		case 0: {
			iconConfig.name = "newspaper-outline";
			break;
		}
		case 1: {
			iconConfig.name = "reload-outline";
			break;
		}
		case 2: {
			iconConfig.name = "checkmark-done-outline";
			break;
		}
		case 3: {
			iconConfig.name = "close-circle-outline";
			break;
		}
		default: {
			break;
		}
	}
	return iconConfig;
};

const renderStepIndicator = (params) => (
	<Ionicons {...getStepIndicatorIconConfig(params)} />
);

const OrderStatusScreen = ({ route }) => {
	const [currentPosition, setCurrentPosition] = useState(0);

	useEffect(() => {
		if (route.params?.position !== undefined) {
			setCurrentPosition(route.params.position);
		}
	}, [route.params]);

	const handleStepPress = (position) => {
		setCurrentPosition(position);
	};

	// Hàm render đơn hàng
	const renderOrderList = (orders, status) => {
		return orders.map((order) => (
			<OrderCard key={order.id} order={order} status={status} />
		));
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="arrow-back-outline"
						size={24}
						color="#000"
					/>
				</TouchableOpacity>
				<Text style={styles.title}>Đơn hàng</Text>
			</View>
			<StepIndicator
				customStyles={customStyles}
				currentPosition={currentPosition}
				labels={labels}
				onPress={handleStepPress}
				stepCount={4}
				renderStepIndicator={renderStepIndicator}
			/>
			<View style={styles.orderContainer}>
				{currentPosition === 0 &&
					renderOrderList(orderData.newOrders, "newOrders")}
				{currentPosition === 1 &&
					renderOrderList(
						orderData.processingOrders,
						"processingOrders"
					)}
				{currentPosition === 2 &&
					renderOrderList(orderData.successOrders, "successOrders")}
				{currentPosition === 3 &&
					renderOrderList(orderData.canceledOrders, "canceledOrders")}
				{currentPosition === 4 &&
					renderOrderList(orderData.allOrders, "allOrders")}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		marginLeft: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	orderContainer: {
		flex: 1,
		padding: 10,
	},
});

export default OrderStatusScreen;
