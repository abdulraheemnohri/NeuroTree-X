import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';

interface MetricProps {
  label: string;
  value: string;
  progress: number;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ label, value, progress, color }) => (
  <View style={styles.metricContainer}>
    <View style={styles.metricHeader}>
      <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.textMuted }]}>{label}</Text>
      <Text style={[Theme.Typography.headlineMd, { color }]}>{value}</Text>
    </View>
    <View style={styles.progressBarBg}>
      <View style={[styles.progressBarFill, { width: `${progress * 100}%`, backgroundColor: color }]} />
    </View>
  </View>
);

export const BrainMetrics: React.FC = () => {
  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>BRAIN_METRICS_v4</Text>
      <Text style={[Theme.Typography.headlineMd, styles.title]}>AI Brain Metrics</Text>
      <View style={styles.metricsList}>
        <Metric label="Memory Size" value="8.4 TB" progress={0.84} color={Theme.Colors.primary} />
        <Metric label="Knowledge Nodes" value="1.2M" progress={0.65} color={Theme.Colors.secondary} />
        <Metric label="Learning Progress" value="98.4%" progress={0.984} color={Theme.Colors.tertiary} />
      </View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: Theme.Colors.primary,
  },
  title: {
    marginVertical: Theme.Spacing.sm,
    color: Theme.Colors.primary,
  },
  metricsList: {
    gap: Theme.Spacing.md,
    marginTop: Theme.Spacing.sm,
  },
  metricContainer: {
    gap: Theme.Spacing.xs,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  progressBarBg: {
    height: 4,
    backgroundColor: Theme.Colors.surfaceContainerHighest,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
  },
});
