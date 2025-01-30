import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {  
	return (
		<SafeAreaProvider>
			<Tab.Navigator
				initialRouteName="Home"
				tabBarOptions={{
					activeTintColor: "#e91e63",
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color, size }) => (
							<Icon name="ios-home" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="VoucherChoosing"
					component={VoucherChoosing}
					options={{
						tabBarLabel: "VoucherChoosing",
						tabBarIcon: ({ color, size }) => (
							<Icon name="ios-list" color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</SafeAreaProvider>
	);
}
