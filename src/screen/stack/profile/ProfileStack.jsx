// ProfileStackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../ProfileScreen";
import ProfileUser from "../../../components/profile/ProfileUser";
import ProfilePoint from "../../../components/profile/ProfilePoint";

const Stack = createStackNavigator();

const ProfileStack = () => {
	return (
		<Stack.Navigator initialRouteName="ProfileScreen">
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ProfileUser"
				component={ProfileUser}
				options={{ headerShown: true, title: "Sửa Hồ Sơ" }}
			/>
			<Stack.Screen
				name="ProfilePoint"
				component={ProfilePoint}
				options={{ headerShown: true, title: "Tích Điểm" }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
