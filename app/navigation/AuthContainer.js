import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"

//Screens
import Home from "./screens/Home";
import Goals from "./screens/Goals";
import Profile from "./screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/loginscreen";

//Screen Names
const homeName = "Home";
const goalName = "Goals";
const profileName = "Profile";

const Stack = createNativeStackNavigator();

export default function AuthContainer(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            
        </Stack.Navigator>
    )
}