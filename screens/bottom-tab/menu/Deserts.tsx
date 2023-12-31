import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";
import AppInput from "../../../components/inputs/AppInput";
import { desert_item } from "../../../constant/desert_item";
import { DesertItem } from "./components";

const Deserts = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen scrollStyle={styles.root}>
      <PageHeaderWithReturn
        label="Desserts"
        rootStyle={{ paddingHorizontal: 21, marginTop: 20 }}
      />

      <View style={styles.inputContaineR}>
        <AppInput placeholder="Search food" isUsedWidth={true} width={"93%"} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
      >
        {desert_item.map((el, index) => {
          return <DesertItem item={el} key={index} />;
        })}
      </ScrollView>
    </RootScreen>
  );
};

export default Deserts;

const styles = StyleSheet.create({
  root: {
    padding: 0,
  },
  inputContaineR: {
    marginTop: 24,
    marginBottom: 19,
    alignItems: "center",
  },
});
