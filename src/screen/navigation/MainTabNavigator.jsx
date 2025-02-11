import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../HomeScreen";

const Tab = createBottomTabNavigator();

// Các màn hình khác chưa có nội dung
const PlaceholderScreen = ({ title }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{title} - Cần đăng nhập</Text>
	</View>
);

const MainTabNavigator = ({ isLoggedIn }) => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					if (route.name === "Home") {
						iconName = "home-outline";
					} else if (route.name === "Explore") {
						iconName = "search-outline";
					} else if (route.name === "Roadmap") {
						iconName = "map-outline";
					} else if (route.name === "Notifications") {
						iconName = "notifications-outline";
					} else if (route.name === "Profile") {
						iconName = "person-outline";
					}
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: "#007AFF",
				tabBarInactiveTintColor: "#888",
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "Trang chủ" }}
			/>

			{/* Nếu chưa đăng nhập, hiển thị màn hình yêu cầu đăng nhập */}
			{!isLoggedIn ? (
				<>
					<Tab.Screen
						name="Explore"
						children={() => <PlaceholderScreen title="Đề xuất" />}
						options={{ title: "Đề xuất" }}
					/>
					<Tab.Screen
						name="Roadmap"
						children={() => <PlaceholderScreen title="Lộ trình" />}
						options={{ title: "Lộ trình" }}
					/>
					<Tab.Screen
						name="Notifications"
						children={() => <PlaceholderScreen title="Thông báo" />}
						options={{ title: "Thông báo" }}
					/>
					<Tab.Screen
						name="Profile"
						children={() => <PlaceholderScreen title="Tài khoản" />}
						options={{ title: "Tài khoản" }}
					/>
				</>
			) : (
				<>
					<Tab.Screen
						name="Explore"
						component={ExploreScreen}
						options={{ title: "Đề xuất" }}
					/>
					<Tab.Screen
						name="Roadmap"
						component={RoadmapScreen}
						options={{ title: "Lộ trình" }}
					/>
					<Tab.Screen
						name="Notifications"
						component={NotificationsScreen}
						options={{ title: "Thông báo" }}
					/>
					<Tab.Screen
						name="Profile"
						component={ProfileScreen}
						options={{ title: "Tài khoản" }}
					/>
				</>
			)}
		</Tab.Navigator>
	);
};

// Style cho Placeholder Screen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f8f8f8",
	},
	text: {
		fontSize: 18,
		color: "#555",
	},
});

export default MainTabNavigator;
