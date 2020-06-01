import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { globalStyles, images } from "./styles";
import Card from "../shared/Card";


export default function ReviewDetails({ route, navigation }) {
  const { title, rating } = route.params;
  console.log(route.params);
  console.log(images.ratings[1]);

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{rating}</Text>

        <View style={styles.rating}>
          <Text>Text zone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      <Button title="go back" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }

})