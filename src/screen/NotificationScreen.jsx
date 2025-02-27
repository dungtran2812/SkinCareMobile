import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icon thư viện
import PromotionCard from "../components/promotion/PromotionCard"; // Import component PromotionCard
import { promotionData } from "../components/promotion/PromotionData"; // Import dữ liệu giả lập

export default function NotificationScreen({ navigation }) {
	const [activeTab, setActiveTab] = React.useState("promotions"); // Quản lý tab hiện tại

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Thông báo</Text>
			</View>

			{/* Tab buttons */}
			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "promotions" && styles.activeTab,
					]}
					onPress={() => handleTabChange("promotions")}
				>
					<Text style={styles.tabText}>Khuyến mãi</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "userNotifications" && styles.activeTab,
					]}
					onPress={() => handleTabChange("userNotifications")}
				>
					<Text style={styles.tabText}>Của bạn</Text>
				</TouchableOpacity>
			</View>

			{/* Content */}
			<ScrollView style={styles.contentContainer}>
				{activeTab === "promotions" ? (
					<FlatList
						data={promotionData}
						renderItem={({ item }) => (
							<PromotionCard content={item} />
						)}
						keyExtractor={(item) => item.id.toString()}
					/>
				) : (
					<View style={styles.content}>
						{/* Biểu tượng "Không có thông báo" */}
						<Icon name="bell-slash" size={50} color="#ccc" />
						<Text style={styles.noNotificationText}>
							Hiện bạn chưa có thông báo nào
						</Text>

						{/* Nút "Tiếp tục mua sắm" */}
						<TouchableOpacity
							style={styles.continueShoppingButton}
							onPress={() =>
								navigation.navigate("MainTabNavigator", {
									screen: "Trang chủ",
								})
							} // Chuyển qua HomeScreen
						>
							<Text style={styles.continueShoppingText}>
								Tiếp tục mua sắm
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#B3E5FC", // Màu xanh cho header
		paddingVertical: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000", // Chữ màu đen
	},
	tabsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "#fff", // Đổi thành màu trắng
		borderBottomWidth: 1,
		borderBottomColor: "#ddd", // Viền dưới nhẹ cho tabs
	},
	tab: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: "#ddd", // Viền nhẹ cho mỗi button
		borderRadius: 5,
	},
	tabText: {
		fontSize: 16,
		color: "#000",
	},
	activeTab: {
		backgroundColor: "#B3E5FC", // Màu nền khi tab đang được chọn
		borderRadius: 5,
	},
	contentContainer: {
		flex: 1,
		padding: 20,
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 30,
	},
	noNotificationText: {
		fontSize: 16,
		color: "#888", // Màu xám cho văn bản
		marginVertical: 10,
	},
	continueShoppingButton: {
		marginTop: 20,
		backgroundColor: "#1E90FF", // Nền xanh cho nút
		paddingVertical: 10,
		paddingHorizontal: 50,
		borderRadius: 5,
	},
	continueShoppingText: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold",
	},
});
