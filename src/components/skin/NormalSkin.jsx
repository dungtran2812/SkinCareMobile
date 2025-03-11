// NormalSkin.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NormalSkin = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lộ Trình Chăm Sóc Da Thường</Text>
			<Text style={styles.step}>
				Bước 1: Làm sạch da với sữa rửa mặt dịu nhẹ, không chứa cồn.
			</Text>
			<Text style={styles.step}>
				Bước 2: Dưỡng ẩm với kem dưỡng nhẹ, dễ thẩm thấu vào da.
			</Text>
			<Text style={styles.step}>
				Bước 3: Sử dụng serum phù hợp để bổ sung các dưỡng chất cho da.
			</Text>
			<Text style={styles.step}>
				Bước 4: Đắp mặt nạ dưỡng da mỗi tuần để duy trì độ ẩm và mềm
				mịn.
			</Text>
			<Text style={styles.step}>
				Bước 5: Bảo vệ da với kem chống nắng có chỉ số SPF từ 30 trở
				lên.
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

export default NormalSkin;
