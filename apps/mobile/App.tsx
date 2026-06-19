import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>NEUROTREE X</Text>
        <Text style={styles.subtitle}>MOBILE SYNAPTIC LINK</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.node}>
           <Text style={styles.nodeText}>CENTRAL CORE</Text>
        </View>
        <Text style={styles.info}>SYNCING WITH LOCAL BRAIN...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -1,
  },
  subtitle: {
    color: '#555',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  node: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#00f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00f0ff',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  nodeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  info: {
    color: '#00f0ff',
    fontSize: 8,
    fontFamily: 'monospace',
    marginTop: 32,
  }
});
