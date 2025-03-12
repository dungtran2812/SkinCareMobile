import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CombinationSkin = () => {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Da Hỗn Hợp</Text>
			<Image
				source={require("../../../assets/images/skin/combination.png")}
				style={styles.image}
			/>
			<Text style={styles.sectionTitle}>Thông Tin Về Da Hỗn Hợp</Text>
			<Text style={styles.text}>
				Da hỗn hợp là sự kết hợp của hai hoặc nhiều loại da khác nhau
				trên khuôn mặt. Thông thường, vùng chữ T (trán, mũi và cằm) sẽ
				dầu, trong khi các vùng khác có thể khô hoặc bình thường.
			</Text>
			<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
			<Text style={styles.text}>
				Nguyên nhân của da hỗn hợp có thể do di truyền, môi trường, và
				cách chăm sóc da không đúng cách.
			</Text>
			<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
			<Text style={styles.text}>
				- Vùng chữ T dầu, bóng nhờn.
				{"\n"}- Vùng má khô hoặc bình thường.
				{"\n"}- Lỗ chân lông to ở vùng chữ T.
			</Text>
			<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
			<Text style={styles.text}>
				- Sử dụng sữa rửa mặt dịu nhẹ.
				{"\n"}- Dưỡng ẩm cho từng vùng da khác nhau.
				{"\n"}- Sử dụng toner kiềm dầu cho vùng chữ T.
				{"\n"}- Sử dụng serum dưỡng cho da hỗn hợp.
				{"\n"}- Dùng kem chống nắng có độ bảo vệ cao.
			</Text>
			<Text style={styles.sectionTitle}>Cách Ăn Uống</Text>
			<Text style={styles.text}>
				- Uống đủ nước mỗi ngày.
				{"\n"}- Ăn nhiều rau xanh và trái cây.
				{"\n"}- Hạn chế đồ ăn nhiều dầu mỡ và đường.
			</Text>
		</ScrollView>
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
		textAlign: "center",
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "contain",
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	button: {
		flex: 1,
		backgroundColor: "#1E3A5F",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginHorizontal: 5,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default CombinationSkin;
