import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    screenWidth: width,
    screenHeight: height,
    basePadding: 16,
    baseMargin: 10,
    borderRadius: 8,
};
