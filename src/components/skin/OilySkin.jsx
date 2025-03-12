import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OilySkin = () => {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Da Dầu</Text>
			<Image
				source={require("../../../assets/images/skin/oily.jpg")}
				style={styles.image}
			/>
			<Text style={styles.sectionTitle}>Thông Tin Về Da Dầu</Text>
			<Text style={styles.text}>
				Da dầu là loại da có tuyến bã nhờn hoạt động mạnh, dẫn đến việc
				da luôn bóng nhờn và dễ bị mụn.
			</Text>
			<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
			<Text style={styles.text}>
				Nguyên nhân của da dầu có thể do di truyền, môi trường, và cách
				chăm sóc da không đúng cách.
			</Text>
			<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
			<Text style={styles.text}>
				- Da bóng nhờn.
				{"\n"}- Lỗ chân lông to.
				{"\n"}- Dễ bị mụn.
			</Text>
			<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
			<Text style={styles.text}>
				- Sử dụng sữa rửa mặt kiềm dầu.
				{"\n"}- Sử dụng toner để làm sạch sâu và se khít lỗ chân lông.
				{"\n"}- Dưỡng ẩm với kem dưỡng nhẹ, không gây nhờn dính.
				{"\n"}- Sử dụng mặt nạ đất sét để hút dầu thừa và làm sạch sâu
				mỗi tuần.
				{"\n"}- Sử dụng kem chống nắng không dầu để bảo vệ da khỏi tác
				hại của tia UV.
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

export default OilySkin;
