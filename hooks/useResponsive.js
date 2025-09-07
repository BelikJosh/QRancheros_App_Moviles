import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const useResponsive = () => {
  // Guideline sizes are based on standard ~5" screen mobile device
  const guidelineBaseWidth = 350;
  const guidelineBaseHeight = 680;

  const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
  const verticalScale = (size) => (height / guidelineBaseHeight) * size;
  const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

  return {
    horizontalScale,
    verticalScale,
    moderateScale,
    width,
    height
  };
};