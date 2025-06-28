import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }} 
        >
            <Stack.Screen component={Onboarding} name="Onboarding" />
        </Stack.Navigator>
    )
}
export default AppNavigator;