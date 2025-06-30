import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import VerifyEmail from "../screens/auth/VerifyEmail";
import HomeScreen from "../screens/main/HomeScreen";
import Favorite from "../screens/main/Favorite";
import ProfileIndex from "../screens/main/ProfileIndex";
import ForgetPassword from "../screens/auth/ForgetPassword";
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
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={SignUp} name="SignUp" />
            <Stack.Screen component={VerifyEmail} name="VerifyEmail" />
            <Stack.Screen component={HomeScreen} name="HomeScreen" />
            <Stack.Screen component={Favorite} name="Favorite" />      
            <Stack.Screen component={ProfileIndex} name="ProfileIndex" />
            <Stack.Screen component={ForgetPassword} name="ForgetPassword" />
        </Stack.Navigator>
    )
}
export default AppNavigator;