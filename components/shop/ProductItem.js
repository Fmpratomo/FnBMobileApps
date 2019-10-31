import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button
} from "react-native";

import Card from "../UI/Card";
import HeartButton from "../UI/HeartButton";
import Colors from "../../constants/Colors";

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              {/* <HeartButton /> */}
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.content}>{props.location}</Text>
              <Text style={styles.price}>{props.category}</Text>
              {/* <Text style={styles.price}>${props.price.toFixed(2)}</Text> */}
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 500,
    width: 400,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden"
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    alignItems: "flex-start",
    height: "17%",
    padding: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    marginVertical: 2
  },
  content: {
    fontFamily: "open-sans",
    fontSize: 18,
    marginVertical: 1,
    color: "#878787"
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginVertical: 1,
    color: "#b8b8b8"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 5
  }
});

export default ProductItem;
