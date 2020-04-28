import React from 'react'
import { View ,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({navigation}) {
    return (
<View>
<Text>Home</Text>
<Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
</View>
    )
}
