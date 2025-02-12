import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

					if (route.name === "Home") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Suggest") {
						iconName = focused ? "bulb" : "bulb-outline";
					} else if (route.name === "Roadmap") {
						iconName = focused ? "map" : "map-outline";
						size = 40; // Roadmap icon lớn hơn và nằm cao hơn
					} else if (route.name === "Notifications") {
						iconName = focused
							? "notifications"
							: "notifications-outline";
					} else if (route.name === "Profile") {
						iconName = focused ? "person" : "person-outline";
					}
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarStyle: {
					height: 60,
					paddingBottom: 5,
					paddingTop: 5,
				},
				tabBarLabelStyle: {
					fontSize: 12,
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Suggest" component={SuggestScreen} />
			<Tab.Screen
				name="Roadmap"
				component={RoadmapScreen}
				options={{
					tabBarStyle: {
						position: "absolute",
						top: -10,
						backgroundColor: "white",
					},
				}}
			/>
			<Tab.Screen name="Notifications" component={NotificationScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default MainTabNavigator;
