import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../HomeScreen";
import ProductItem from "../../../components/item/ProductItem";
import ProductItemDetail from "../../../components/item/ProductItemDetail";
import SuggestScreen from "../../SuggestScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
