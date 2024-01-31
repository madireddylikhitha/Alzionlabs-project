import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/components/Home'
import Product from './src/components/Product'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name={'home'} component={Home}/>
    <Stack.Screen name={'product'} component={Product}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}