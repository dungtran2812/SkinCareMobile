import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthIntroScreen from "../src/auth/AuthIntroScreen";
import LoginScreen from "../src/auth/LoginScreen";
import SignupScreen from "../src/auth/SignupScreen";
import StylistScreen from "../src/screens/StylistScreen";
import StylistDetailScreen from "../src/screens/StylistDetailScreen";
import BottomTabNavigator from "../src/navigation/BottomTabNavigator";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../src/store/store";
import { Provider } from "react-redux";
import { setUpInterceptor } from "../src/utils/axiosInterceptor";
import { LogBox } from "react-native";
import VoucherChoosing from "../src/screens/BookingDetails/VoucherChoosing";

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
        <Stack.Navigator initialRouteName="AuthIntroScreen">
          <Stack.Screen
            name="AuthIntroScreen"
            component={AuthIntroScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ServiceScreen"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StylistScreen"
            component={StylistScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StylistDetail"
            component={StylistDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VoucherChoosing"
            component={VoucherChoosing}
            options={{
              headerShown: true,
              headerBackTitle: "Custom Back",
              headerBackTitleStyle: { fontSize: 30 },
            }}
          />
        </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
}
