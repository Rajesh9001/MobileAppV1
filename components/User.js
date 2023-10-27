import { Text } from "react-native";
import { useContext, View } from "react";
import { Context } from "../store/Context";

function User() {
  const { name, phoneNumber } = useContext(Context);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
    </View>
  );
}
export default User;
