import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../HomeScreen";
import SuggestScreen from "../SuggestScreen";
import RoadmapScreen from "../RoadmapScreen";
import NotificationScreen from "../NotificationScreen";
import ProfileScreen from "../ProfileScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Trang chủ") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Đề xuất") {
						iconName = focused ? "bulb" : "bulb-outline";
					} else if (route.name === "Lộ trình") {
						iconName = focused ? "map" : "map-outline";
					} else if (route.name === "Thông báo") {
						iconName = focused
							? "notifications"
							: "notifications-outline";
					} else if (route.name === "Tài khoản") {
						iconName = focused ? "person" : "person-outline";
					}

					return (
						<View style={{ alignItems: "center" }}>
							<Ionicons
								name={iconName}
								size={focused ? 28 : 24}
								color={focused ? "#1E3A5F" : "gray"}
							/>
							{focused && (
								<View
									style={{
										width: 5,
										height: 5,
										backgroundColor: "#1E3A5F",
										borderRadius: 50,
										marginTop: 3,
									}}
								/>
							)}
						</View>
					);
				},
				tabBarStyle: {
					height: 60,
					paddingBottom: 5,
					paddingTop: 5,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					color: "#1E3A5F",
					fontWeight: "bold",
				},
			})}
		>
			<Tab.Screen
				name="Trang chủ"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Lộ trình"
				component={RoadmapScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Đề xuất"
				component={SuggestScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Thông báo"
				component={NotificationScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Tài khoản"
				component={ProfileScreen}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default MainTabNavigator;
