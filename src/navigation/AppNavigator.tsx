import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UserListScreen} />
      <Stack.Screen name="Details" component={UserDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
