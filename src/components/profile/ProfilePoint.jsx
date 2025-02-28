import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Import Ionicons cho nút back

export default function ProfilePoint({ navigation }) {
	// Dữ liệu ví dụ về lịch sử tích điểm (đơn hàng)
	const pointHistory = [
		{ id: "1", orderAmount: 320000 },
		{ id: "2", orderAmount: 150000 },
		{ id: "3", orderAmount: 500000 },
		{ id: "4", orderAmount: 200000 },
		{ id: "5", orderAmount: 450000 },
	];

	// Hàm tính điểm tích luỹ
	const calculatePoints = (amount) => {
		return Math.floor(amount * 0.01);
	};

	// Tính tổng điểm tích luỹ
	const totalPoints = pointHistory.reduce(
		(total, item) => total + calculatePoints(item.orderAmount),
		0
	);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButton}
				>
					<Ionicons name="arrow-back" size={30} color="#000" />
				</TouchableOpacity>
				<Text style={styles.title}>Tích điểm</Text>
			</View>

			{/* Điểm tích luỹ */}
			<View style={styles.pointsContainer}>
				<Text style={styles.pointsValue}>{totalPoints} điểm</Text>
			</View>

			{/* Lịch sử tích điểm */}
			<Text style={styles.historyTitle}>Lịch sử tích điểm</Text>
			<FlatList
				data={pointHistory}
				renderItem={({ item }) => {
					const points = calculatePoints(item.orderAmount);
					return (
						<View style={styles.historyItem}>
							<Text style={styles.historyText}>
								Mua đơn hàng {item.orderAmount.toLocaleString()}{" "}
								VNĐ thì tích được {points} điểm
							</Text>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff", // Màu nền trắng
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#B3E5FC", // Màu nền xanh dương
	},
	backButton: {
		position: "absolute",
		left: 20,
		top: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		textAlign: "center",
		flex: 1,
	},
	pointsContainer: {
		padding: 20,
		backgroundColor: "#B3E5FC", // Nền xanh cho điểm tích lũy
		borderRadius: 30,
		alignItems: "center",
		marginHorizontal: 90,
		marginTop: 20,
	},
	pointsTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	pointsValue: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#000",
	},
	historyTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
		marginVertical: 20,
		marginLeft: 20,
	},
	historyItem: {
		padding: 15,
		marginHorizontal: 20,
		marginBottom: 10,
		backgroundColor: "#fff", // Nền trắng cho lịch sử tích điểm
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ddd", // Viền xám
	},
	historyText: {
		fontSize: 16,
		color: "#000", // Chữ màu đen
	},
});
