import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MOBILE CONFIGURATION</Text>

      <View style={styles.section}>
         <Text style={styles.sectionTitle}>SYNAPTIC ENGINE</Text>
         <View style={styles.row}>
            <Text style={styles.rowLabel}>Local Inference (Gemma-Mobile)</Text>
            <Switch value={true} trackColor={{ false: '#111', true: '#00f0ff' }} />
         </View>
      </View>

      <View style={styles.section}>
         <Text style={styles.sectionTitle}>P2P NETWORK</Text>
         <View style={styles.row}>
            <Text style={styles.rowLabel}>Background Sync</Text>
            <Switch value={true} trackColor={{ false: '#111', true: '#10b981' }} />
         </View>
      </View>

      <View style={styles.footer}>
         <Text style={styles.footerText}>SYSTEM VERSION: 1.0.0-ALPHA-MOBILE</Text>
         <Text style={styles.footerText}>P2P ID: mobile-node-x77</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 24 },
  header: { color: '#fff', fontSize: 18, fontWeight: '900', marginBottom: 40 },
  section: { marginBottom: 32 },
  sectionTitle: { color: '#333', fontSize: 10, fontWeight: 'bold', marginBottom: 16, letterSpacing: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#0a0a0a' },
  rowLabel: { color: '#888', fontSize: 12 },
  footer: { marginTop: 'auto', paddingVertical: 20 },
  footerText: { color: '#222', fontSize: 8, fontFamily: 'monospace', marginBottom: 4 }
});
