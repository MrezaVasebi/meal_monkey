import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "../../../components/texts";

interface IHeader {
  title: string;
  subTitle: string;
}

const Headers = (props: IHeader) => {
  return (
    <>
      <AppText lblStyle={styles.lblTitleStyle} label={props.title} />

      <AppText label={props.subTitle} lblStyle={styles.lblSubtitleStyle} />
    </>
  );
};

export default Headers;

const styles = StyleSheet.create({
  lblTitleStyle: {
    fontSize: 30,
    textAlign: "center",
  },
  lblSubtitleStyle: {
    marginTop: 16,
    lineHeight: 20,
    marginBottom: 36,
    textAlign: "center",
  },
});
