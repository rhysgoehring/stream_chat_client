import { Dimensions, PixelRatio } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const widthPercentage = widthPercent => {
  const screenWidth = Dimensions.get("window").width;
  const elementWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

const heightPercentage = heightPercent => {
  const screenHeight = Dimensions.get("window").height;
  const elementHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};

export { SCREEN_HEIGHT, SCREEN_WIDTH, widthPercentage, heightPercentage };
