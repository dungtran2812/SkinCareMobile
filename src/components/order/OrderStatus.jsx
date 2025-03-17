import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import StepIndicator from "react-native-step-indicator";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons
import OrderCard from "./OrderCard"; // Import OrderCard
import { useNavigation } from "@react-navigation/native";
import { useGetOrderByStatusQuery, useLazyGetOrderByStatusQuery } from "../../services/skincare.service";

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
	const [refetch, { data: orderData, isLoading, isError }] = useLazyGetOrderByStatusQuery();
	const navigation = useNavigation();
	const [currentPosition, setCurrentPosition] = useState(0);

	useEffect(() => {
		if (route.params?.position !== undefined) {
			setCurrentPosition(route.params.position);
		}
	}, [route.params]);

	useEffect(() => {
		// Refetch orders based on the current position
		switch (currentPosition) {
			case 0:
				refetch('Pending');
				break;
			case 1:
				refetch('Approved');
				break;
			case 2:
				refetch('Completed');
				break;
			case 3:
				refetch('Rejected');
				break;
			default:
				break;
		}
	}, [currentPosition, refetch]);

	const handleStepPress = (position) => {
		setCurrentPosition(position);
	};

	// Hàm render đơn hàng
	const renderOrderList = (orders) => {
		return orders.map((order) => (
			<OrderCard key={order.id} order={order} />
		));
	};

	if (isLoading) return <Text>Loading orders...</Text>;
	// if (isError) return <Text>Error loading orders.</Text>;

	return (
		<ScrollView style={styles.container}>
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
					renderOrderList(orderData?.orders?.data || [])}
				{currentPosition === 1 &&
					renderOrderList(orderData?.orders?.data || [])}
				{currentPosition === 2 &&
					renderOrderList(orderData?.orders?.data || [])}
				{currentPosition === 3 &&
					renderOrderList(orderData?.orders?.data || [])}
			</View>
		</ScrollView>
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
