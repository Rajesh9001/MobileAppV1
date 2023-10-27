import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useState } from "react";
import { Container } from "../components/constants/Container";
import { constant, drawerMenu } from "../components/constants/constants";
import Colors from "../components/constants/Colors";
import Row from "../components/constants/Row";
import { useNavigation } from "@react-navigation/native";
import Styles from "../components/common/Styles";

import Icon from "./Icons";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function CustomDrawer(props) {
  const navigation = useNavigation();
  const [menuIndex, setMenuIndex] = useState(-1);
  return (
    <Container>
      <View style={styles.spacer} />

      {drawerMenu.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={[styles.menu, { backgroundColor: item.bg + "99" }]}
            onPress={() => {
              // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              LayoutAnimation.configureNext(
                LayoutAnimation.create(200, "easeInEaseOut", "opacity")
              );
              setMenuIndex(menuIndex === index ? -1 : index);
            }}
          >
            <Row style={styles.item}>
              <Icon type={item.type} name={item.icon} size={22} />
              <Text
                style={[
                  styles.text,
                  {
                    color: menuIndex === index ? Colors.black : Colors.gray,
                  },
                ]}
              >
                {item.title}
              </Text>
            </Row>
            {menuIndex === index && (
              <View
                style={{
                  borderRadius: constant.borderRadius,
                  backgroundColor: item.bg,
                }}
              >
                {item.menuList.map((subMenu, index) => (
                  <TouchableNativeFeedback key={index}>
                    <View style={styles.subMenu}>
                      <Text>{subMenu.title}</Text>
                    </View>
                  </TouchableNativeFeedback>
                ))}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: constant.SPACING,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  header: {
    padding: constant.SPACING,
    ...Styles.rowView,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  name: {
    fontSize: constant.titleFontSize,
  },
  menu: {
    marginHorizontal: constant.SPACING / 1.7,
    marginVertical: constant.SPACING / 2.5,
    borderRadius: constant.borderRadius,
  },
  item: {
    paddingHorizontal: constant.SPACING / 1.5,
    paddingVertical: constant.SPACING / 1.2,
  },
  text: {
    fontSize: constant.textFontSize,
    paddingHorizontal: constant.SPACING,
  },
  subMenu: {
    paddingHorizontal: constant.SPACING,
    paddingVertical: constant.SPACING / 1.5,
  },
  spacer: {
    marginVertical: constant.SPACING,
    width: "90%",
    height: 1,
    backgroundColor: Colors.light,
    alignSelf: "center",
  },
});
