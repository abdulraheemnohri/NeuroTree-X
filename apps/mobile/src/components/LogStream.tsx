import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';

const PHRASES = [
  "Syncing neuron #8492...",
  "Expanding semantic graph...",
  "Latent space search: 0.004s",
  "Core heat nominal: 34°C",
  "Optimizing Transformer layers",
  "New knowledge injection...",
  "Awaiting core command",
  "Synapse 4x9 connected"
];

const LOG_TYPES = [
  { label: '[OK]', color: Theme.Colors.primary },
  { label: '[UP]', color: Theme.Colors.secondary },
  { label: '[IN]', color: Theme.Colors.tertiary },
  { label: '[>>]', color: Theme.Colors.primary },
];

export const LogStream: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      const type = LOG_TYPES[Math.floor(Math.random() * LOG_TYPES.length)];
      const newLog = { id: Date.now(), phrase, type };

      setLogs(prev => [newLog, ...prev].slice(0, 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>SYSTEM_LOGS</Text>
      <View style={styles.logContainer}>
        {logs.map(log => (
          <View key={log.id} style={styles.logRow}>
            <Text style={[Theme.Typography.codeSm, { color: log.type.color }]}>{log.type.label}</Text>
            <Text style={[Theme.Typography.codeSm, { color: Theme.Colors.outline }]}>{log.phrase}</Text>
          </View>
        ))}
        {logs.length === 0 && (
          <Text style={Theme.Typography.codeSm}>Initializing neural link...</Text>
        )}
      </View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    marginBottom: Theme.Spacing.xl,
  },
  logContainer: {
    marginTop: Theme.Spacing.sm,
    gap: Theme.Spacing.xs,
  },
  logRow: {
    flexDirection: 'row',
    gap: Theme.Spacing.sm,
  },
});
