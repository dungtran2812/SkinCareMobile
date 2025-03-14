import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { store, persistor } from "../src/store/store";
import { setUpInterceptor } from "../src/services/api.service";
import IntroScreen from "../src/screen/IntroScreen";
import LoginScreen from "../src/auth/LoginScreen";
import SignupScreen from "../src/auth/SignupScreen";
import MainTabNavigator from "../src/screen/navigation/MainTabNavigator";
import QuizzScreen from "../src/components/quizz/QuizzScreen";
import QuizzAnswer from "../src/components/quizz/QuizzAnswer";
import ProductItemDetail from "../src/components/item/ProductItemDetail";
import SkinResult from "../src/components/skin/SkinResult";
import MyCart from "../src/components/cart/MyCart";
import Checkout from "../src/components/cart/Checkout";
import OrderSuccess from "../src/components/order/OrderSuccess";
import Consult from "../src/components/consult/Consult";

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
						name="MainTabNavigator"
						component={MainTabNavigator}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="QuizzScreen"
						component={QuizzScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="QuizzAnswer"
						component={QuizzAnswer}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="ProductItemDetail"
						component={ProductItemDetail}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SkinResult"
						component={SkinResult}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="MyCart"
						component={MyCart}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Checkout"
						component={Checkout}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="OrderSuccess"
						component={OrderSuccess}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Consult"
						component={Consult}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</PersistGate>
		</Provider>
	);
}
