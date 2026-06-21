import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Settings2 } from 'lucide-react-native';

export const NodeInspector: React.FC = () => {
  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>NODE_INSPECTOR</Text>
      <Text style={[Theme.Typography.headlineMd, styles.title]}>Node Detail Panel</Text>

      <View style={styles.entityContainer}>
        <Text style={Theme.Typography.labelCaps}>SELECTED_ENTITY</Text>
        <Text style={[Theme.Typography.headlineMd, { color: '#fff' }]}>Transformer AI</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={Theme.Typography.labelCaps}>COMPLEXITY</Text>
          <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.primary }]}>High</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={Theme.Typography.labelCaps}>CONNECTIONS</Text>
          <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.secondary }]}>452</Text>
        </View>
      </View>

      <View style={styles.updateBox}>
        <View style={styles.updateHeader}>
          <Text style={Theme.Typography.labelCaps}>LAST_UPDATE</Text>
          <Text style={[Theme.Typography.labelCaps, { color: Theme.Colors.tertiary }]}>LIVE</Text>
        </View>
        <Text style={Theme.Typography.codeSm}>2ms ago</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>RECALIBRATE_NODE</Text>
        <Settings2 color={Theme.Colors.text} size={16} />
      </TouchableOpacity>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    borderRightWidth: 4,
    borderRightColor: Theme.Colors.secondary,
  },
  title: {
    color: Theme.Colors.secondary,
    marginVertical: Theme.Spacing.sm,
  },
  entityContainer: {
    marginTop: Theme.Spacing.sm,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Theme.Spacing.md,
    marginTop: Theme.Spacing.lg,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: Theme.Spacing.sm,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  updateBox: {
    marginTop: Theme.Spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: Theme.Spacing.md,
    borderRadius: 4,
  },
  updateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Theme.Spacing.xs,
  },
  button: {
    marginTop: Theme.Spacing.lg,
    backgroundColor: Theme.Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.Spacing.md,
    borderRadius: Theme.Spacing.xs,
    gap: Theme.Spacing.sm,
  },
  buttonText: {
    ...Theme.Typography.labelCaps,
    color: Theme.Colors.text,
  },
});
