import { Platform } from 'react-native';
import colors from './colors';

export default {
  colors: colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
