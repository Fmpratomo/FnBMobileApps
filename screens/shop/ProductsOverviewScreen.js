import React from "react";
import {
  FlatList,
  Button,
  Platform,
  Text,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import HeaderCard from "../../components/UI/HeaderCard";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";
import ViewShot from "react-native-view-shot";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const products2 = useSelector(state => state.products.availableProducts2);

  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title
    });
  };

  const SelectlinkAll = () => {
    props.navigation.navigate("Cart");
  };

  return (
    <View>
      <ScrollView>
        <HeaderCard title="Deals of the Day" onSelect={SelectlinkAll} />
        <FlatList
          horizontal={true}
          data={products}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              location={itemData.item.location}
              category={itemData.item.category}
              onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title);
              }}
            >
              {/* <Button
                color={Colors.primary}
                title="View Details"
                onPress={() => {
                  selectItemHandler(itemData.item.id, itemData.item.title);
                }}
              /> */}

              <View style={styles.centerButton}>
                <Button
                  color={Colors.darkOrange}
                  title="BOOK NOW"
                  onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                  }}
                />
              </View>
            </ProductItem>
          )}
        />

        <HeaderCard title="Popular Place in Jakarta" onSelect={SelectlinkAll} />
        <FlatList
          horizontal={true}
          data={products2}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              location={itemData.item.location}
              category={itemData.item.category}
              onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title);
              }}
            >
              <View style={styles.centerButton}>
                <Button
                  color={Colors.darkOrange}
                  title="BOOK NOW"
                  onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                  }}
                />
              </View>
            </ProductItem>
          )}
        />
      </ScrollView>
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Products"
  };
};

const styles = StyleSheet.create({
  centerButton: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
});

export default ProductsOverviewScreen;
