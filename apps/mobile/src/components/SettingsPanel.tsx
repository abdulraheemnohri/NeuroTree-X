import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Shield, Zap, Globe, Cpu } from 'lucide-react-native';

const SettingToggle = ({ icon: Icon, label, value, onValueChange, color }: { icon: any, label: string, value: boolean, onValueChange: (v: boolean) => void, color: string }) => (
  <View style={styles.settingRow}>
    <View style={styles.settingLabel}>
      <Icon color={color} size={20} />
      <Text style={Theme.Typography.bodyMd}>{label}</Text>
    </View>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#333', true: color }}
      thumbColor="#fff"
    />
  </View>
);

export const SettingsPanel: React.FC = () => {
  const [localLlm, setLocalLlm] = useState(true);
  const [synapticGlow, setSynapticGlow] = useState(true);
  const [p2pSync, setP2pSync] = useState(false);
  const [gpuAccel, setGpuAccel] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={[Theme.Typography.labelCaps, { marginBottom: Theme.Spacing.sm }]}>SYSTEM_PARAMETERS</Text>
      <GlassCard style={styles.card}>
        <SettingToggle icon={Cpu} label="Local LLM Processing" value={localLlm} onValueChange={setLocalLlm} color={Theme.Colors.primary} />
        <View style={styles.divider} />
        <SettingToggle icon={Zap} label="Synaptic Glow Effects" value={synapticGlow} onValueChange={setSynapticGlow} color={Theme.Colors.secondary} />
        <View style={styles.divider} />
        <SettingToggle icon={Globe} label="P2P Knowledge Sync" value={p2pSync} onValueChange={setP2pSync} color={Theme.Colors.tertiary} />
        <View style={styles.divider} />
        <SettingToggle icon={Shield} label="GPU Neural Acceleration" value={gpuAccel} onValueChange={setGpuAccel} color={Theme.Colors.primary} />
      </GlassCard>

      <TouchableOpacity style={styles.rebootButton}>
        <Text style={styles.rebootText}>REBOOT NEURAL CORE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.Spacing.md,
  },
  card: {
    padding: 0,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Theme.Spacing.md,
  },
  settingLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  rebootButton: {
    marginTop: Theme.Spacing.xl,
    padding: Theme.Spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Theme.Colors.error,
    alignItems: 'center',
  },
  rebootText: {
    ...Theme.Typography.labelCaps,
    color: Theme.Colors.error,
  }
});
