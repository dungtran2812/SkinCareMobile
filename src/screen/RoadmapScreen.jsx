import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import StepCard from "../components/routine/StepCard";

const RoadmapScreen = () => {
	const route = useRoute();
	const { skinType } = route.params || {}; // Nhận loại da từ params

	const steps = [
		{
			name: "Rửa mặt",
			description: "Dùng sữa rửa mặt phù hợp với làn da của bạn.",
		},
		{
			name: "Tẩy trang",
			description: "Tẩy trang để làm sạch lớp trang điểm.",
		},
		{ name: "Toner", description: "Cân bằng độ pH cho da." },
		{
			name: "Serum",
			description: "Serum giúp cung cấp dưỡng chất chuyên sâu.",
		},
		{ name: "Dưỡng ẩm", description: "Dưỡng ẩm để giữ làn da mềm mịn." },
		{
			name: "Kem chống nắng",
			description: "Dùng kem chống nắng để bảo vệ làn da của bạn",
		},
		{
			name: "Tẩy tế bào chết",
			description: "Tẩy da chết cho da sáng mịn",
		},
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Lộ trình chăm sóc da</Text>
				<Text style={styles.skinType}>
					Dành cho da: {skinType || "Không xác định"}
				</Text>
			</View>

			{steps.map((step, index) => (
				<StepCard key={index} step={step} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1, // Đảm bảo ScrollView chiếm hết màn hình
		backgroundColor: "#fff", // Giữ nền trắng
		paddingHorizontal: 20, //
	},
	header: {
		alignItems: "center",
		marginBottom: 10,
		backgroundColor: "#B3E5FC",
		paddingVertical: 10,
		justifyContent: "center",
		marginHorizontal: -20, // Đẩy header rộng ra ngoài
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
	},
	skinType: {
		fontSize: 16,
		color: "#666",
		fontStyle: "italic",
		marginTop: 5,
	},
});

export default RoadmapScreen;
