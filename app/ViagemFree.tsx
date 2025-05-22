import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';

export default function ViagemFree({ hideNavbar = false }: { hideNavbar?: boolean }) {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#f5f7fa', minHeight: '100%' }]}>
        <Text style={styles.header}>Viagens Free</Text>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem para o Rio de Janeiro</Text>
          <Text style={styles.description}>Aproveite uma viagem gratuita para o Rio!</Text>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem para Salvador</Text>
          <Text style={styles.description}>Conheça Salvador sem custo!</Text>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80' }} style={styles.cardImage} resizeMode="cover" />
          <Text style={styles.title}>Viagem para Florianópolis</Text>
          <Text style={styles.description}>Desfrute de praias incríveis de graça!</Text>
        </View>
      </ScrollView>
      <Navbar active="ViagemFree" />
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
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 12,
    backgroundColor: '#e0e0e0',
  },
});
