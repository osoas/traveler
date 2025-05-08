import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';


const { width, height } = Dimensions.get('window');

const LoginForm = ({ isMobile }) => {
  return (
    <View style={isMobile ? styles.mobileFormContainer : styles.desktopRight}>
      <Text style={styles.title}>Registre-se!</Text>

      <TextInput
        placeholder="Nome"
        keyboardType="text"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirme sua senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Já tem uma conta? </Text>
        <TouchableOpacity>
            <Link href="/Login" style={styles.linkText}>Entrar!</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileFormContainer: {
    width,
    height,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  desktopRight: {
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    height: 50,
    backgroundColor: '#1eb384',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#1eb384',
    fontWeight: 'bold',
  },
});

export default LoginForm;
