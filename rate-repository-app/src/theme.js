import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textAlternative: '#0000FF',
    primary: '#0366d6',
    danger: '#d73a4a',
    appBarBackground: '#24292e',
    appBodyBackground: '#e1e4e8',
    buttonPrimary: '#FFFFFF',
    inputFieldBackground: '#FFC0CB'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;