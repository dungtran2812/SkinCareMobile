import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import QuizzScreen from "./../../quizz/QuizzScreen";
import RoadmapScreen from "./../../RoadmapScreen";
import DrySkin from "./../../../components/skin/DrySkin"; // Tạo các màn hình này cho từng loại da
import CombinationSkin from "./../../../components/skin/CombinationSkin";
import NormalSkin from "./../../../components/skin/NormalSkin";
import OilySkin from "./../../../components/skin/OilySkin";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="QuizzScreen">
				<Stack.Screen name="QuizzScreen" component={QuizzScreen} />
				<Stack.Screen name="RoadmapScreen" component={RoadmapScreen} />
				<Stack.Screen name="DrySkin" component={DrySkin} />
				<Stack.Screen
					name="CombinationSkin"
					component={CombinationSkin}
				/>
				<Stack.Screen name="NormalSkin" component={NormalSkin} />
				<Stack.Screen name="OilySkin" component={OilySkin} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
