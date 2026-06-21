import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';

const LOG_LINES = [
  "SYSTEM_INITIALIZING...",
  "LOADING_NEURAL_WEIGHTS...",
  "CONNECTING_TO_AGI_CORE...",
  "AUTH_TOKEN_VALIDATED",
  "NEUROTREE_V4_ONLINE",
  ">>> research_lab_sync_active",
  ">>> knowledge_fabric_index_0.94",
  ">>> warning_synaptic_jitter_detected",
  ">>> recalibrating_node_delta",
  ">>> status_nominal",
];

export const SystemTerminal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[Theme.Typography.labelCaps, { marginBottom: Theme.Spacing.sm }]}>SYSTEM_TERMINAL_v1.0.4</Text>
      <GlassCard style={styles.terminal}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {LOG_LINES.map((line, i) => (
            <Text key={i} style={Theme.Typography.codeSm}>
              <Text style={{ color: Theme.Colors.secondary }}>[root@neurotree]</Text># {line}
            </Text>
          ))}
          <View style={styles.cursor} />
        </ScrollView>
      </GlassCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Theme.Spacing.md,
    flex: 1,
  },
  terminal: {
    backgroundColor: '#000',
    flex: 1,
    height: 400,
  },
  cursor: {
    width: 8,
    height: 14,
    backgroundColor: Theme.Colors.primary,
    marginTop: 4,
  }
});
