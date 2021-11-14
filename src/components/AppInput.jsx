import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Spacer from "./Spacer";
const AppInput = ({ children, placeholder, label }) => {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Spacer space={20} />
        <View style={styles.content}>
          {children}
          <TextInput style={{ padding: 11 }} placeholder={placeholder} />
        </View>
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  label: { fontWeight: "bold", fontSize: 15 },
  content: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
});
