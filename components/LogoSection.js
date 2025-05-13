import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LogoSection = ({ isMobile }) => {
  return (
    <View style={isMobile ? styles.mobileTop : styles.desktopLeft}>
      <Image
        source={require('../assets/images/Grifo.png')}
        style={isMobile ? styles.mobileLogo : styles.desktopLogo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mobileTop: {
    backgroundColor: '#008000',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileLogo: {
    width: width * 0.4,
    height: width * 0.4,
  },
  desktopLeft: {
    flex: 6,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopLogo: {
    width: '50%',
    height: '50%',
  },
});

export default LogoSection;
