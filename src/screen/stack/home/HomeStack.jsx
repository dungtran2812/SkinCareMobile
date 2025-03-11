import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../HomeScreen";
import QuizzScreen from "../../../components/quizz/QuizzScreen";

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
				name="QuizzScreen"
				component={QuizzScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
