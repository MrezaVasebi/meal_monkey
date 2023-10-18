import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { RootScreen, WrapIcon } from "../../../components";
import { AppButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";
import { popular_restaurant } from "../../../constant";
import { appColors } from "../../../utils";
import { PopularRestaurantCart } from "../home/components";

const Offers = () => {
  return (
    <RootScreen root={styles.root}>
      <View style={{ paddingHorizontal: 21 }}>
        <View style={styles.headerContainer}>
          <AppText label="Latest Offers" lblStyle={styles.lblTitle} />

          <TouchableOpacity>
            <WrapIcon iconName="cart" />
          </TouchableOpacity>
        </View>

        <AppText
          label="Find discounts, Offers special
          meals and more!"
          lblStyle={{ marginVertical: 22 }}
        />
      </View>

      <AppButton btnStyle={styles.btnCheckOffers}>
        <AppText label="Check Offers" lblStyle={{ color: appColors.white }} />
      </AppButton>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 15 }}>
        {popular_restaurant.map((el, index) => {
          return (
            <PopularRestaurantCart
              root={{ marginBottom: 10 }}
              key={index}
              item={el}
            />
          );
        })}
      </ScrollView>
    </RootScreen>
  );
};

export default Offers;

const styles = StyleSheet.create({
  root: {
    padding: 0,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: appColors.darkPlus,
  },
  btnCheckOffers: {
    width: 157,
    marginLeft: 21,
    borderWidth: 0,
    marginBottom: 22,
    backgroundColor: appColors.orange,
  },
});
