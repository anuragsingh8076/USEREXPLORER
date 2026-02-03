import React from "react";
import{ View, Text} from "react-native";


export default function UserDetailScreen({route}: any){
  const {user} = route.params;
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
    </View>
  );
}