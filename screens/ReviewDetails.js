import React from "react";
import { globalStyles } from "./styles";

import { View, Text, Button } from "react-native";

export default function ReviewDetails({  route, navigation  })  {
  const { title, rating } = route.params;
  console.log(route.params)

  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Text>Revie details Screen</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Button title='go back' onPress={pressHandler}/>
    </View>
  );
};


