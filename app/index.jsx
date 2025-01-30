import { Provider } from "react-redux";
import { setUpInterceptor } from "../src/services/api.service";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"; // Thêm dòng này
import { NavigationContainer } from "@react-navigation/native"; // Thêm dòng này
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/store/store";

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
	"VirtualizedLists should never be nested",
]);
const Stack = createStackNavigator();
setUpInterceptor(store);

export default function App() {
	setUpInterceptor(store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Detail" component={Detail} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
