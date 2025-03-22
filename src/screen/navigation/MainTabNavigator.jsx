import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SuggestScreen from "../SuggestScreen";
import RoadmapScreen from "../RoadmapScreen";
import ProfileStack from "../stack/profile/ProfileStack";
import HomeStack from "../stack/home/HomeStack";
import NotificationStack from "../stack/notification/NotificationStack";

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
						<Ionicons
							name={iconName}
							size={focused ? 30 : 24}
							color={focused ? "#B3E5FC" : "gray"}
						/>
					);
				},
				tabBarLabelStyle: {
					fontSize: 8.5,
					color: "#1E3A5F",
					marginBottom: 5,
				},
				tabBarStyle: {
					height: 60,
					paddingBottom: 5,
					paddingTop: 5,
				},
			})}
		>
			<Tab.Screen
				name="Trang chủ"
				component={HomeStack}
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
				component={NotificationStack}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Tài khoản"
				component={ProfileStack}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default MainTabNavigator;
