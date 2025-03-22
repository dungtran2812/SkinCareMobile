import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	FlatList,
	SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icon thư viện
import PromotionCard from "../components/promotion/PromotionCard"; // Import component PromotionCard
import { promotionData } from "../components/promotion/PromotionData"; // Import dữ liệu giả lập

export default function NotificationScreen({ navigation }) {
	const [activeTab, setActiveTab] = React.useState("promotions"); // Quản lý tab hiện tại

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	const renderEmptyState = () => (
		<View style={styles.emptyStateContainer}>
			<Icon name="bell-slash" size={60} color="#ccc" />
			<Text style={styles.emptyStateText}>
				Hiện bạn chưa có thông báo nào
			</Text>
			<TouchableOpacity
				style={styles.continueShoppingButton}
				onPress={() =>
					navigation.navigate("MainTabNavigator", {
						screen: "Trang chủ",
					})
				}
			>
				<Text style={styles.continueShoppingText}>
					Tiếp tục mua sắm
				</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Thông báo</Text>
			</View>

			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[
						styles.tabButton,
						activeTab === "promotions" && styles.activeTabButton,
					]}
					onPress={() => handleTabChange("promotions")}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "promotions" && styles.activeTabText,
						]}
					>
						Khuyến mãi
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.tabButton,
						activeTab === "userNotifications" &&
							styles.activeTabButton,
					]}
					onPress={() => handleTabChange("userNotifications")}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === "userNotifications" &&
								styles.activeTabText,
						]}
					>
						Của bạn
					</Text>
				</TouchableOpacity>
			</View>

			{activeTab === "promotions" ? (
				<FlatList
					data={promotionData}
					renderItem={({ item }) => <PromotionCard content={item} />}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.contentContainer}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				renderEmptyState()
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "600",
		color: "#1E3A5F",
		textAlign: "center",
	},
	tabsContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 15,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#f0f0f0",
	},
	tabButton: {
		flex: 1,
		paddingVertical: 10,
		marginHorizontal: 5,
		borderRadius: 8,
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	activeTabButton: {
		backgroundColor: "#1E3A5F",
	},
	tabText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#666",
	},
	activeTabText: {
		color: "#fff",
	},
	contentContainer: {
		padding: 15,
	},
	emptyStateContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	emptyStateText: {
		fontSize: 16,
		color: "#666",
		marginTop: 15,
		marginBottom: 25,
	},
	continueShoppingButton: {
		backgroundColor: "#1E3A5F",
		paddingVertical: 12,
		paddingHorizontal: 25,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	continueShoppingText: {
		color: "#fff",
		fontSize: 15,
		fontWeight: "600",
	},
});
