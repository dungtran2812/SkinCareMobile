import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DrySkin = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Da Khô</Text>
			<Image
				source={require("../../../assets/images/skin/dry.jpg")}
				style={styles.image}
			/>
			<Text style={styles.sectionTitle}>Thông Tin Về Da Khô</Text>
			<Text style={styles.text}>
				Da khô là loại da thiếu độ ẩm, thường có cảm giác căng và dễ
				bong tróc. Da khô có thể xuất hiện nếp nhăn sớm hơn so với các
				loại da khác.
			</Text>
			<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
			<Text style={styles.text}>
				Nguyên nhân của da khô có thể do di truyền, môi trường, và cách
				chăm sóc da không đúng cách.
			</Text>
			<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
			<Text style={styles.text}>
				- Da căng, khô ráp.
				{"\n"}- Dễ bong tróc.
				{"\n"}- Xuất hiện nếp nhăn sớm.
			</Text>
			<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
			<Text style={styles.text}>
				- Sử dụng sữa rửa mặt dưỡng ẩm.
				{"\n"}- Sử dụng toner nhẹ nhàng để cấp ẩm cho da.
				{"\n"}- Dưỡng ẩm với kem dưỡng chuyên dụng cho da khô.
				{"\n"}- Sử dụng mặt nạ dưỡng ẩm 2 lần/tuần.
				{"\n"}- Bảo vệ da với kem chống nắng có chỉ số SPF cao.
			</Text>
			<Text style={styles.sectionTitle}>Cách Ăn Uống</Text>
			<Text style={styles.text}>
				- Uống đủ nước mỗi ngày.
				{"\n"}- Ăn nhiều rau xanh và trái cây.
				{"\n"}- Hạn chế đồ ăn nhiều dầu mỡ và đường.
			</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "Trang chủ",
						})
					}
				>
					<Text style={styles.buttonText}>Quay Lại Trang Chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "Lộ trình",
						})
					}
				>
					<Text style={styles.buttonText}>
						Đi Tới Lộ Trình Sản Phẩm
					</Text>
				</TouchableOpacity>
			</View>
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

export default DrySkin;
