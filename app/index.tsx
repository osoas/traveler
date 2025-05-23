import React from 'react';
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    View,
} from 'react-native';
import LoginForm from '../components/LoginForm';
import LogoSection from '../components/LogoSection';


const { width } = Dimensions.get('window');
const isMobile = width < 768;

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isMobile ? (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            pagingEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <LogoSection isMobile />
            <LoginForm isMobile />
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <LogoSection isMobile={false} />
          <LoginForm isMobile={false} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

