import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Activity, Cpu, HardDrive } from 'lucide-react-native';

const HealthItem = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <View style={styles.item}>
    <Icon color={color} size={16} />
    <View style={styles.itemInfo}>
      <Text style={[Theme.Typography.labelCaps, { fontSize: 8 }]}>{label}</Text>
      <Text style={[Theme.Typography.bodyMd, { fontWeight: '700', color }]}>{value}</Text>
    </View>
  </View>
);

export const SystemHealth: React.FC = () => {
  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>SYSTEM_HEALTH</Text>
      <View style={styles.grid}>
        <HealthItem icon={Cpu} label="CPU LOAD" value="24%" color={Theme.Colors.primary} />
        <HealthItem icon={Activity} label="SYNAPTIC" value="NOMINAL" color={Theme.Colors.tertiary} />
        <HealthItem icon={HardDrive} label="STORAGE" value="84%" color={Theme.Colors.secondary} />
      </View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.Spacing.sm,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.xs,
  },
  itemInfo: {
    justifyContent: 'center',
  }
});
