import React from "react";

import { View, Text, StyleSheet,} from "react-native";

export default function UserCard({user}: any){
  return( 
    <View style={styles.card}>
      <Text style={styles.name}></Text>
      <Text>{user.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: 'bold',
  }
});