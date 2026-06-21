import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../theme/Theme';

const INITIAL_MESSAGES = [
  { id: '1', role: 'system', text: 'NEURAL_LINK_ESTABLISHED' },
  { id: '2', role: 'agent', text: 'I am processing the latest synaptic weighting updates. Calibration is at 94%.' },
  { id: '3', role: 'user', text: 'Explain the Quantum Flux variance.' },
  { id: '4', role: 'agent', text: 'The variance is likely due to high-dimensional interference in the latent space. I recommend recalibrating Node Delta.' },
];

export const AIAgentChat: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[Theme.Typography.labelCaps, { marginBottom: Theme.Spacing.sm }]}>SYNAPTIC_DIALOG</Text>
      <View style={styles.chatBox}>
        {INITIAL_MESSAGES.map(msg => (
          <View key={msg.id} style={[styles.message, msg.role === 'user' ? styles.userMessage : styles.agentMessage]}>
            <Text style={[Theme.Typography.codeSm, { fontSize: 10, marginBottom: 2, color: msg.role === 'system' ? Theme.Colors.tertiary : Theme.Colors.primary }]}>
              {msg.role.toUpperCase()}
            </Text>
            <Text style={Theme.Typography.bodyMd}>{msg.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Theme.Spacing.md,
  },
  chatBox: {
    gap: Theme.Spacing.md,
  },
  message: {
    padding: Theme.Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
  },
  agentMessage: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    marginRight: 40,
  },
  userMessage: {
    backgroundColor: 'rgba(0, 240, 255, 0.05)',
    borderColor: 'rgba(0, 240, 255, 0.2)',
    alignSelf: 'flex-end',
    marginLeft: 40,
  }
});
