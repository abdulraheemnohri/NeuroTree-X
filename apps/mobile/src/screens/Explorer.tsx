import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Explorer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>NEURAL EXPLORER</Text>
        <Text style={styles.status}>SCANNING SYNAPTIC FABRIC...</Text>
      </View>
      <View style={styles.canvas}>
        <View style={[styles.node, { borderColor: '#fff' }]}>
           <Text style={styles.nodeText}>CORE</Text>
        </View>
        <View style={[styles.node, styles.orbit, { borderColor: '#00f0ff', left: 40, top: 40 }]}>
           <Text style={styles.nodeText}>AI</Text>
        </View>
        <View style={[styles.node, styles.orbit, { borderColor: '#10b981', right: 40, bottom: 40 }]}>
           <Text style={styles.nodeText}>BIO</Text>
        </View>
      </View>
      <View style={styles.details}>
         <Text style={styles.detailsTitle}>NODE: TRANSFORMER_ALPHA</Text>
         <Text style={styles.detailsBody}>Complexity: HIGH // Synapses: 4.2K</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  headerContainer: { padding: 24 },
  header: { color: '#fff', fontSize: 18, fontWeight: '900' },
  status: { color: '#00f0ff', fontSize: 8, fontWeight: 'bold', marginTop: 4 },
  canvas: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  node: { width: 80, height: 80, borderRadius: 40, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  nodeText: { color: '#fff', fontSize: 8, fontWeight: 'bold' },
  orbit: { position: 'absolute', width: 40, height: 40, borderRadius: 20 },
  details: { padding: 24, backgroundColor: '#0a0a0a', borderTopWidth: 1, borderTopColor: '#111' },
  detailsTitle: { color: '#fff', fontSize: 10, fontWeight: 'bold', marginBottom: 4 },
  detailsBody: { color: '#555', fontSize: 8, fontFamily: 'monospace' }
});
