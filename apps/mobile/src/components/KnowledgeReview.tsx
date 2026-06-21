import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { BookOpen, TrendingUp } from 'lucide-react-native';

export const KnowledgeReview: React.FC = () => {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <BookOpen color={Theme.Colors.secondary} size={16} />
        <Text style={Theme.Typography.labelCaps}>KNOWLEDGE_REVIEW</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.statRow}>
          <Text style={Theme.Typography.bodyMd}>New Patterns</Text>
          <View style={styles.badge}>
            <TrendingUp color={Theme.Colors.tertiary} size={12} />
            <Text style={[Theme.Typography.codeSm, { color: Theme.Colors.tertiary }]}>+12%</Text>
          </View>
        </View>
        <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.textMuted, marginTop: 4 }]}>
          Reinforcing connections between "Quantum Flux" and "Synaptic Weighting".
        </Text>
      </View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.sm,
    marginBottom: Theme.Spacing.sm,
  },
  content: {
    gap: 4,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 246, 187, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  }
});
