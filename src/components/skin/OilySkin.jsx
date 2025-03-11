// OilySkin.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OilySkin = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lộ Trình Chăm Sóc Da Dầu</Text>
			<Text style={styles.step}>
				Bước 1: Làm sạch da bằng sữa rửa mặt kiềm dầu, giúp kiểm soát bã
				nhờn.
			</Text>
			<Text style={styles.step}>
				Bước 2: Sử dụng toner để làm sạch sâu và se khít lỗ chân lông.
			</Text>
			<Text style={styles.step}>
				Bước 3: Dưỡng ẩm với kem dưỡng nhẹ, không gây nhờn dính.
			</Text>
			<Text style={styles.step}>
				Bước 4: Sử dụng mặt nạ đất sét để hút dầu thừa và làm sạch sâu
				mỗi tuần.
			</Text>
			<Text style={styles.step}>
				Bước 5: Sử dụng kem chống nắng không dầu để bảo vệ da khỏi tác
				hại của tia UV.
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

export default OilySkin;
