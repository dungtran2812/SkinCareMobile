import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../ProfileScreen";
import ProfileUser from "../../../components/profile/ProfileUser";
import ProfilePoint from "../../../components/profile/ProfilePoint";
import OrderStatus from "../../../components/order/OrderStatus";
import GiftChange from "../../../components/gift/GiftChange";
import ProductFavourite from "../../../components/favourite/ProductFavourite";
import ProfileQuizzResult from "../../../components/profile/ProfileQuizzResult";
import QuizzDetail from "../../../components/quizz/QuizzDetail";
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
				options={{ headerShown: false, title: "Sửa Hồ Sơ" }}
			/>
			<Stack.Screen
				name="ProfileQuizzResult"
				component={ProfileQuizzResult}
				options={{ headerShown: false, title: "Lịch sử kiểm tra da" }}
			/>
			<Stack.Screen
				name="QuizzDetail"
				component={QuizzDetail}
				options={{ headerShown: false, title: "Chi tiết kết quả" }}
			/>
			<Stack.Screen
				name="OrderStatus"
				component={OrderStatus}
				options={{ headerShown: false, title: "Trạng thái đơn hàng" }}
			/>
			<Stack.Screen
				name="GiftChange"
				component={GiftChange}
				options={{ headerShown: false, title: "Đổi quà" }}
			/>
			<Stack.Screen
				name="ProductFavourite"
				component={ProductFavourite}
				options={{ headerShown: false, title: "Yêu thích" }}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
