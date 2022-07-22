import { Home } from "../views/Home";
import { Details } from "../views/Details";
import { Register } from "../views/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
        </Navigator>
    )
}