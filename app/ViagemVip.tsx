import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../components/Navbar';

export default function ViagemVip() {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#f5f7fa', minHeight: '100%' }]}>
        <Text style={styles.header}>Viagens VIP</Text>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem VIP para Paris</Text>
          <Text style={styles.description}>Experiência exclusiva em Paris!</Text>
          <Text style={styles.price}>R$ 2.500</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem VIP para Nova York</Text>
          <Text style={styles.description}>Conheça NY com todo o luxo!</Text>
          <Text style={styles.price}>R$ 3.200</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem VIP para Tóquio</Text>
          <Text style={styles.description}>Descubra o Japão em grande estilo!</Text>
          <Text style={styles.price}>R$ 4.000</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navbar active="ViagemVip" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fffbe6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 12,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#bfa100',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ffd700',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
