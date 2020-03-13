import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  PlayScreen from '../screens/PlayScreen'
import RatingScreen from '../screens/RatingScreen'




const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='Play'
            component={PlayScreen}
            options={{
              headerTitle:'',
              headerTintColor: 'black',
              headerTransparent: true
            }}
            />
        <Stack.Screen
            name='Rating'
            component={RatingScreen}
            options={{
              headerTitle:'',
              headerTintColor: 'black',
              headerTransparent: true
            }}
            />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
