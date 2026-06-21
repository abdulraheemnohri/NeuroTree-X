import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Box, Play, Cpu } from 'lucide-react-native';

export const SimulationView: React.FC = () => {
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(scanAnim, { toValue: 0, duration: 0, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 180],
  });

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <Text style={Theme.Typography.labelCaps}>SIMULATION_ENGINE</Text>
        <View style={styles.badge}>
          <Text style={[Theme.Typography.labelCaps, { fontSize: 8, color: Theme.Colors.primary }]}>QUANTUM_FLUX_RUNNING</Text>
        </View>
      </View>

      <View style={styles.simulationContainer}>
        <View style={styles.grid}>
          {[...Array(9)].map((_, i) => (
            <View key={i} style={styles.gridCell} />
          ))}
        </View>
        <Animated.View style={[styles.scanLine, { transform: [{ translateY }] }]} />
        <View style={styles.object}>
          <Box color={Theme.Colors.primary} size={40} opacity={0.6} />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.stat}>
          <Cpu color={Theme.Colors.outline} size={14} />
          <Text style={Theme.Typography.codeSm}>ITER: 4.2k</Text>
        </View>
        <View style={styles.stat}>
          <Play color={Theme.Colors.outline} size={14} />
          <Text style={Theme.Typography.codeSm}>FPS: 60.0</Text>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.Spacing.md,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.2)',
  },
  simulationContainer: {
    height: 180,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridCell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Theme.Colors.primary,
    shadowColor: Theme.Colors.primary,
    shadowRadius: 10,
    shadowOpacity: 1,
    zIndex: 10,
  },
  object: {
    zIndex: 5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: Theme.Spacing.md,
    gap: Theme.Spacing.lg,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }
});
