import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

//Screens
import Home from "./screens/Home";
import Goals from "./screens/Goals";
import Profile from "./screens/Profile";
import { SafeAreaView } from "react-native";

//Screen Names
const homeName = "Home";
const goalName = "Goals";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <SafeAreaView style={{flex: 1}}>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? "home" : "home-outline";
                        } else if (rn === goalName) {
                            iconName = focused ? "trophy" : "trophy-outline";
                        } else if (rn === profileName) {
                            iconName = focused ? "person" : "person-outline";
                        }

                        return <Ionicons name={iconName} size={size} colors={color}/>
                    },
                    headerShown: false 
                })}>

                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={goalName} component={Goals}/>
                <Tab.Screen name={profileName} component={Profile}/>

            </Tab.Navigator>
        </SafeAreaView>
    )
}