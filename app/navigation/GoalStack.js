import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GoalsScreen from './screens/Goals';
import CameraScreen from './screens/CameraScreen';

const GoalStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Goals' component={GoalsScreen}/>
        <Stack.Screen name='Camera' component={CameraScreen}/>
    </Stack.Navigator>
  )
}

export default GoalStack