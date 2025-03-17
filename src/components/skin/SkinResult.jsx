import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const skinskinType = {
	oily: {
		title: "Da Dầu",
		image: require("../../../assets/images/skin/oily.jpg"),
		info: "Da dầu là loại da có tuyến bã nhờn hoạt động mạnh, dẫn đến việc da luôn bóng nhờn và dễ bị mụn.",
		causes: "Nguyên nhân của da dầu có thể do di truyền, môi trường, và cách chăm sóc da không đúng cách.",
		signs: "- Da bóng nhờn.\n- Lỗ chân lông to.\n- Dễ bị mụn.",
		care: "- Sử dụng sữa rửa mặt kiềm dầu.\n- Sử dụng toner để làm sạch sâu và se khít lỗ chân lông.\n- Dưỡng ẩm với kem dưỡng nhẹ, không gây nhờn dính.\n- Sử dụng mặt nạ đất sét để hút dầu thừa và làm sạch sâu mỗi tuần.\n- Sử dụng kem chống nắng không dầu để bảo vệ da khỏi tác hại của tia UV.",
		diet: "- Uống đủ nước mỗi ngày.\n- Ăn nhiều rau xanh và trái cây.\n- Hạn chế đồ ăn nhiều dầu mỡ và đường.",
	},
	dry: {
		title: "Da Khô",
		image: require("../../../assets/images/skin/dry.jpg"),
		info: "Da khô là loại da thiếu độ ẩm, thường có cảm giác căng và dễ bong tróc. Da khô có thể xuất hiện nếp nhăn sớm hơn so với các loại da khác.",
		causes: "Nguyên nhân của da khô có thể do di truyền, môi trường, và cách chăm sóc da không đúng cách.",
		signs: "- Da căng, khô ráp.\n- Dễ bong tróc.\n- Xuất hiện nếp nhăn sớm.",
		care: "- Sử dụng sữa rửa mặt dưỡng ẩm.\n- Sử dụng toner nhẹ nhàng để cấp ẩm cho da.\n- Dưỡng ẩm với kem dưỡng chuyên dụng cho da khô.\n- Sử dụng mặt nạ dưỡng ẩm 2 lần/tuần.\n- Bảo vệ da với kem chống nắng có chỉ số SPF cao.",
		diet: "- Uống đủ nước mỗi ngày.\n- Ăn nhiều rau xanh và trái cây.\n- Hạn chế đồ ăn nhiều dầu mỡ và đường.",
	},
	normal: {
		title: "Da Thường",
		image: require("../../../assets/images/skin/normal.png"),
		info: "Da thường là loại da cân bằng, không quá khô cũng không quá dầu. Da thường có kết cấu mịn màng, lỗ chân lông nhỏ và ít gặp vấn đề về da.",
		causes: "Nguyên nhân của da thường có thể do di truyền và cách chăm sóc da đúng cách.",
		signs: "- Da mịn màng, không bóng nhờn.\n- Lỗ chân lông nhỏ.\n- Ít gặp vấn đề về da.",
		care: "- Sử dụng sữa rửa mặt dịu nhẹ.\n- Dưỡng ẩm với kem dưỡng nhẹ, dễ thẩm thấu vào da.\n- Sử dụng serum phù hợp để bổ sung các dưỡng chất cho da.\n- Đắp mặt nạ dưỡng da mỗi tuần để duy trì độ ẩm và mềm mịn.\n- Bảo vệ da với kem chống nắng có chỉ số SPF từ 30 trở lên.",
		diet: "- Uống đủ nước mỗi ngày.\n- Ăn nhiều rau xanh và trái cây.\n- Hạn chế đồ ăn nhiều dầu mỡ và đường.",
	},
	combination: {
		title: "Da Hỗn Hợp",
		image: require("../../../assets/images/skin/combination.png"),
		info: "Da hỗn hợp là sự kết hợp của hai hoặc nhiều loại da khác nhau trên khuôn mặt. Thông thường, vùng chữ T (trán, mũi và cằm) sẽ dầu, trong khi các vùng khác có thể khô hoặc bình thường.",
		causes: "Nguyên nhân của da hỗn hợp có thể do di truyền, môi trường, và cách chăm sóc da không đúng cách.",
		signs: "- Vùng chữ T dầu, bóng nhờn.\n- Vùng má khô hoặc bình thường.\n- Lỗ chân lông to ở vùng chữ T.",
		care: "- Sử dụng sữa rửa mặt dịu nhẹ.\n- Dưỡng ẩm cho từng vùng da khác nhau.\n- Sử dụng toner kiềm dầu cho vùng chữ T.\n- Sử dụng serum dưỡng cho da hỗn hợp.\n- Dùng kem chống nắng có độ bảo vệ cao.",
		diet: "- Uống đủ nước mỗi ngày.\n- Ăn nhiều rau xanh và trái cây.\n- Hạn chế đồ ăn nhiều dầu mỡ và đường.",
	},
};

const SkinResult = ({ route }) => {
	const navigation = useNavigation();
	const skinType = route.params;

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.title}>{skinType.type}</Text>
				<Image source={skinType.image} style={styles.image} />
				<Text style={styles.sectionTitle}>
					Thông Tin Về {skinType.type}
				</Text>
				<Text style={styles.text}>{skinType.info}</Text>
				<Text style={styles.sectionTitle}>Nguyên Nhân</Text>
				<Text style={styles.text}>{skinType.description}</Text>
				<Text style={styles.sectionTitle}>Dấu Hiệu</Text>
				<Text style={styles.text}>{skinType.symptom}</Text>
				<Text style={styles.sectionTitle}>Cách Chăm Sóc</Text>
				<Text style={styles.text}>{skinType.treatment}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() =>
						navigation.navigate("MainTabNavigator", {
							screen: "HomeScreen",
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
							params: { skinType },
						})
					}
				>
					<Text style={styles.buttonText}>Lộ Trình Sản Phẩm</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	scrollContainer: {
		padding: 20,
		paddingBottom: 100, // Để tránh nội dung bị che bởi các nút
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
		padding: 15,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
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

export default SkinResult;
