import React from "react";
import NotificationScreen from "../../NotificationScreen";
import PromotionDetail from "../../../components/promotion/PromotionDetail";
import PromotionCard from "../../../components/promotion/PromotionCard";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const NotificationStack = () => {
	return (
		<Stack.Navigator initialRouteName="NotificationScreen">
			<Stack.Screen
				name="NotificationScreen"
				component={NotificationScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PromotionCard"
				component={PromotionCard}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PromotionDetail"
				component={PromotionDetail}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default NotificationStack;
