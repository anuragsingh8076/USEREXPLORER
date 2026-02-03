import React from 'react';

import { TextInput, StyleSheet} from 'react-native';

export default function SearchBar({value, onChange}: any){
  return (
    <TextInput
      placeholder="Search user..."
      value= {value}
      onChangeText={onChange}
      style={styles.input}
      />
  )
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },
});