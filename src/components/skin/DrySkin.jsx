// DrySkin.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DrySkin = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lộ Trình Chăm Sóc Da Khô</Text>
			<Text style={styles.step}>
				Bước 1: Làm sạch da bằng sữa rửa mặt dưỡng ẩm.
			</Text>
			<Text style={styles.step}>
				Bước 2: Sử dụng toner nhẹ nhàng để cấp ẩm cho da.
			</Text>
			<Text style={styles.step}>
				Bước 3: Dưỡng ẩm với kem dưỡng chuyên dụng cho da khô.
			</Text>
			<Text style={styles.step}>
				Bước 4: Sử dụng mặt nạ dưỡng ẩm 2 lần/tuần.
			</Text>
			<Text style={styles.step}>
				Bước 5: Bảo vệ da với kem chống nắng có chỉ số SPF cao.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	step: {
		fontSize: 16,
		marginBottom: 10,
	},
});

export default DrySkin;
