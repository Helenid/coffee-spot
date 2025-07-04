import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import VerifyEmail from "../screens/auth/VerifyEmail";
import HomeScreen from "../screens/main/HomeScreen";
import Favorite from "../screens/main/Favorite";
import ProfileIndex from "../screens/main/ProfileIndex";
import ForgetPassword from "../screens/auth/ForgetPassword";
import CoffeeCard from "../components/CoffeeCard";
import PromoCard from "../components/PromoCard";
import CoffeeDetail from "../screens/main/CoffeeDetail";
import ReviewOrder from "../screens/main/ReviewOrder";
import PaymentMethod from "../screens/main/PaymentMethod";
import BuyNow from "../screens/main/BuyNow";
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
            <Stack.Screen component={CoffeeCard} name="CoffeeCard" />
            <Stack.Screen component={PromoCard} name="PromoCard" />
            <Stack.Screen component={CoffeeDetail} name="CoffeeDetail" />
            <Stack.Screen component={ReviewOrder} name="ReviewOrder" />
            <Stack.Screen component={PaymentMethod} name="PaymentMethod" />
            <Stack.Screen component={BuyNow} name="BuyNow" />
        </Stack.Navigator>
    )
}
export default AppNavigator;