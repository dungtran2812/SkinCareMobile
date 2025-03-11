import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NormalSkin = () => {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Da Thường</Text>
			<Image
				source={require("../../../assets/images/skin/normal.png")}
				style={styles.image}
			/>
			<Text style={styles.sectionTitle}>Thông Tin Về Da Thường</Text>
			<Text style={styles.text}>
				Da thường là loại da cân bằng, không quá khô cũng không quá dầu.
				Da thường có kết cấu mịn màng, lỗ chân lông nhỏ và ít gặp vấn đề
				về da.
			</Text>
			<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
			<Text style={styles.text}>
				Nguyên nhân của da thường có thể do di truyền và cách chăm sóc
				da đúng cách.
			</Text>
			<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
			<Text style={styles.text}>
				- Da mịn màng, không bóng nhờn.
				{"\n"}- Lỗ chân lông nhỏ.
				{"\n"}- Ít gặp vấn đề về da.
			</Text>
			<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
			<Text style={styles.text}>
				- Sử dụng sữa rửa mặt dịu nhẹ.
				{"\n"}- Dưỡng ẩm với kem dưỡng nhẹ, dễ thẩm thấu vào da.
				{"\n"}- Sử dụng serum phù hợp để bổ sung các dưỡng chất cho da.
				{"\n"}- Đắp mặt nạ dưỡng da mỗi tuần để duy trì độ ẩm và mềm
				mịn.
				{"\n"}- Bảo vệ da với kem chống nắng có chỉ số SPF từ 30 trở
				lên.
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
							screen: "Trang Chủ",
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

export default NormalSkin;
