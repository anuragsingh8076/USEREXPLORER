import React from "react";
import {View, Button} from "react-native";

import {useDispatch} from "react-redux";

import { clearUsers } from "../redux/usersSlice";


export default function SettingsScreen(){
  const dispatch = useDispatch();
  return(
    <View>
      <Button title="Clear Cache" onPress={() => dispatch(clearUsers())} />
    </View>
  );
}