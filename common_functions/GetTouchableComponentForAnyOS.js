import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

export const isNativeFeedbackSupported = () => {
  return Platform.OS === "android" && Platform.Version >= 21;
};

export const GetTouchableComponentForAnyOS = () => {
  if (isNativeFeedbackSupported()) {
    return TouchableNativeFeedback;
  }
  console.log("Fallback to TouchableOpacity");
  return TouchableOpacity;
};
