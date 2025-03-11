// CombinationSkin.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CombinationSkin = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lộ Trình Chăm Sóc Da Hỗn Hợp</Text>
			<Text style={styles.step}>
				Bước 1: Làm sạch da với sữa rửa mặt dịu nhẹ, phù hợp cho da hỗn
				hợp.
			</Text>
			<Text style={styles.step}>
				Bước 2: Dưỡng ẩm cho từng vùng da khác nhau (vùng T-zone và vùng
				má).
			</Text>
			<Text style={styles.step}>
				Bước 3: Sử dụng toner kiềm dầu cho vùng chữ T và cấp ẩm cho các
				vùng khác.
			</Text>
			<Text style={styles.step}>
				Bước 4: Sử dụng serum dưỡng cho da hỗn hợp để duy trì độ ẩm và
				cân bằng.
			</Text>
			<Text style={styles.step}>
				Bước 5: Dùng kem chống nắng có độ bảo vệ cao cho toàn bộ khuôn
				mặt.
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

export default CombinationSkin;
