import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/loginscreen";
import RegisterScreen from "./screens/registerscreen";

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthContainer;