import {Dimensions} from 'react-native';

export default {
  headerColor: '#141414',
  backgroundColor: '#1d1d1d',
  textColor: '#e3e3e3',
  accentColor1: '#cccccc',
  accentColor2: '#41cab0',
  successColor: '#3fdd8d',
  errorColor: '#e03654',
  smallScreenMaxWidth: '320px',
  headerHeight: 70,
  activeOpacity: 0.7
};

export const screenWidth = Math.floor(Dimensions.get('window').width);
export const screenHeight = Math.floor(Dimensions.get('window').height);
