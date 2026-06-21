import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Plus, Zap } from 'lucide-react-native';

export const AIAgentGenesis: React.FC = () => {
  const [isSpawning, setIsSpawning] = useState(false);
  const pulseScale = useRef(new Animated.Value(1)).current;

  const handleSpawn = () => {
    setIsSpawning(true);
    Animated.sequence([
      Animated.timing(pulseScale, { toValue: 1.5, duration: 200, useNativeDriver: true }),
      Animated.timing(pulseScale, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start(() => {
      setTimeout(() => setIsSpawning(false), 2000);
    });
  };

  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>AGENT_GENESIS</Text>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={[Theme.Typography.headlineMd, { color: Theme.Colors.tertiary }]}>Spawn AI Scientist</Text>
          <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.textMuted }]}>Deploy an autonomous agent to the research lab.</Text>
        </View>

        <TouchableOpacity onPress={handleSpawn} disabled={isSpawning} style={[styles.spawnButton, isSpawning && styles.disabled]}>
          <Animated.View style={{ transform: [{ scale: pulseScale }] }}>
            {isSpawning ? <Zap color="#000" size={24} /> : <Plus color="#000" size={24} />}
          </Animated.View>
        </TouchableOpacity>
      </View>

      {isSpawning && (
        <View style={styles.status}>
          <Text style={Theme.Typography.codeSm}>>>> Synthesizing neural weights...</Text>
          <View style={styles.loadingBar}>
            <View style={styles.loadingFill} />
          </View>
        </View>
      )}
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    backgroundColor: 'rgba(0, 246, 187, 0.05)',
    borderColor: 'rgba(0, 246, 187, 0.2)',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.Spacing.sm,
  },
  info: {
    flex: 1,
    paddingRight: Theme.Spacing.md,
  },
  spawnButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Theme.Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  status: {
    marginTop: Theme.Spacing.md,
    gap: Theme.Spacing.xs,
  },
  loadingBar: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 1,
    overflow: 'hidden',
  },
  loadingFill: {
    width: '60%',
    height: '100%',
    backgroundColor: Theme.Colors.tertiary,
  }
});
