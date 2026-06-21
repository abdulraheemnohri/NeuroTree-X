import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const Dashboard = () => {
  const metrics = [
    { label: 'Memory Size', value: '8.4 TB', color: '#00f0ff' },
    { label: 'Neural Nodes', value: '1.2M', color: '#10b981' },
    { label: 'Evolution', value: '98.4%', color: '#a855f7' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>NEUROTREE X DASHBOARD</Text>
      <View style={styles.grid}>
        {metrics.map(m => (
          <View key={m.label} style={[styles.card, { borderColor: m.color + '44' }]}>
            <Text style={styles.label}>{m.label}</Text>
            <Text style={[styles.value, { color: m.color }]}>{m.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.log}>
        <Text style={styles.logTitle}>ACTIVITY FEED</Text>
        <Text style={styles.logText}>>>> RESEARCH: Quantum Fluctuations</Text>
        <Text style={styles.logText}>>>> SYNC: Local Brain Optimized</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  header: { color: '#fff', fontSize: 18, fontWeight: '900', marginBottom: 20, letterSpacing: 2 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { width: '47%', padding: 16, backgroundColor: '#0a0a0a', borderWidth: 1, borderRadius: 16 },
  label: { color: '#555', fontSize: 8, fontWeight: 'bold', marginBottom: 4 },
  value: { fontSize: 16, fontWeight: 'bold', fontFamily: 'monospace' },
  log: { marginTop: 32, padding: 16, backgroundColor: '#050505', borderRadius: 16, borderLeftWidth: 2, borderLeftColor: '#00f0ff' },
  logTitle: { color: '#00f0ff', fontSize: 10, fontWeight: 'bold', marginBottom: 8 },
  logText: { color: '#444', fontSize: 8, fontFamily: 'monospace', marginBottom: 4 }
});
