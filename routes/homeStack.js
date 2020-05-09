import React from 'react'
import { View ,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../Screens/News'

function homeStack(){
const Stack = createStackNavigator();
    
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="News" component={News} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default homeStack