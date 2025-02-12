import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { store, persistor } from "../src/store/store";
import { setUpInterceptor } from "../src/services/api.service";
import IntroScreen from "../src/screen/IntroScreen";
import LoginScreen from "../src/auth/LoginScreen";
import SignupScreen from "../src/auth/SignupScreen";
import OtpScreen from "../src/auth/OtpScreen";

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
	"VirtualizedLists should never be nested",
]);

const Stack = createStackNavigator();
setUpInterceptor(store);

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Stack.Navigator initialRouteName="IntroScreen">
					<Stack.Screen
						name="IntroScreen"
						component={IntroScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="LoginScreen"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignupScreen"
						component={SignupScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="OtpScreen"
						component={OtpScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</PersistGate>
		</Provider>
	);
}
