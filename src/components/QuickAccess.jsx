import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Cài đặt thư viện icon

const { width } = Dimensions.get("window");

const QuickAccess = () => {
	const navigation = useNavigation();

	// Mảng chứa tên các màn hình, nút và tên icon
	const buttons = [
		{ title: "Hàng mới về", screen: "NewArrivals", icon: "gift" },
		{ title: "Giao 2h", screen: "Delivery2h", icon: "clock-o" }, // Sử dụng "clock-o"
		{ title: "Xem đơn hàng", screen: "TrackOrder", icon: "search" },
		{ title: "Bán chạy", screen: "BestSellers", icon: "star" }, // Sử dụng "star" thay vì "chart-line"
		{ title: "Cẩm nang", screen: "Guide", icon: "book" },
		{ title: "Làm quiz", screen: "Quiz", icon: "question-circle" },
		{ title: "Tư vấn", screen: "Consult", icon: "headphones" }, // Sử dụng "headphones"
		{ title: "Chu trình", screen: "Process", icon: "cogs" },
	];

	const handlePress = (screen) => {
		navigation.navigate(screen); // Điều hướng đến màn hình tương ứng
	};

	return (
		<View style={styles.container}>
			{/* Hàng đầu tiên với 4 nút */}
			<View style={styles.row}>
				{buttons.slice(0, 4).map((button, index) => (
					<TouchableOpacity
						key={index}
						style={styles.button}
						onPress={() => handlePress(button.screen)}
					>
						<View style={styles.iconContainer}>
							<Icon
								name={button.icon}
								size={24}
								color="#1E3A5F"
							/>{" "}
							{/* Màu icon */}
						</View>
						<Text style={styles.buttonText}>{button.title}</Text>
					</TouchableOpacity>
				))}
			</View>

			{/* Hàng thứ hai với 4 nút */}
			<View style={styles.row}>
				{buttons.slice(4, 8).map((button, index) => (
					<TouchableOpacity
						key={index}
						style={styles.button}
						onPress={() => handlePress(button.screen)}
					>
						<View style={styles.iconContainer}>
							<Icon
								name={button.icon}
								size={24}
								color="#1E3A5F"
							/>{" "}
							{/* Màu icon */}
						</View>
						<Text style={styles.buttonText}>{button.title}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25, // Tạo khoảng cách giữa các hàng
		backgroundColor: "#B3E5FC", // Nền màu cho toàn bộ màn hình
		justifyContent: "center", // Căn giữa màn hình
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: width - 20, // Set width to fit screen with some padding
		marginBottom: 10, // Giảm khoảng cách giữa các hàng
	},
	button: {
		flex: 1,
		height: 60, // Điều chỉnh chiều cao nút
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "transparent", // Không có nền riêng biệt cho mỗi nút
		marginBottom: 8, // Giảm khoảng cách dưới nút
		transform: [{ translateY: -5 }], // Đẩy các button lên
		elevation: 5, // Hiệu ứng đổ bóng cho Android
		shadowColor: "#000", // Màu bóng cho iOS
		shadowOffset: { width: 0, height: 3 }, // Đổ bóng xuống dưới
		shadowOpacity: 0.1, // Độ mờ của bóng
		shadowRadius: 5, // Độ lớn của bóng
	},
	iconContainer: {
		width: 50, // Đặt kích thước cho vòng tròn chứa icon
		height: 50, // Đảm bảo chiều cao và chiều rộng bằng nhau
		borderRadius: 25, // Tạo hình tròn
		backgroundColor: "white", // Màu nền trắng cho icon
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 5, // Căn chỉnh khoảng cách giữa icon và title
	},
	buttonText: {
		color: "black", // Màu chữ
		fontSize: 12,
		textAlign: "center",
	},
});

export default QuickAccess;
