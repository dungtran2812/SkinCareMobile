import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../HomeScreen";
import BlogDetail from "../../../components/blog/BlogDetail";
import Blog from "../../../components/blog/Blog";

const Stack = createStackNavigator();

const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Blog"
				component={Blog}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="BlogDetail"
				component={BlogDetail}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
