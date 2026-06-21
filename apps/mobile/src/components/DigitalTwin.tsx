import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { User, Activity } from 'lucide-react-native';

export const DigitalTwin: React.FC = () => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1, duration: 1500, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 0, duration: 1500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const opacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.8],
  });

  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>DIGITAL_TWIN_v1</Text>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Animated.View style={[styles.pulseCircle, { opacity, transform: [{ scale: pulseAnim.interpolate({ inputRange: [0,1], outputRange: [1, 1.5] }) }] }]} />
          <View style={styles.avatar}>
            <User color={Theme.Colors.primary} size={32} />
          </View>
        </View>
        <View style={styles.info}>
          <Text style={[Theme.Typography.headlineMd, { fontSize: 18 }]}>Core-01 Proxy</Text>
          <View style={styles.statusRow}>
            <Activity color={Theme.Colors.tertiary} size={12} />
            <Text style={[Theme.Typography.codeSm, { color: Theme.Colors.tertiary, fontSize: 10 }]}>LIVE_SYNC: 99.8% FIDELITY</Text>
          </View>
          <Text style={[Theme.Typography.bodyMd, { color: Theme.Colors.textMuted, fontSize: 12, marginTop: 4 }]}>
            Mirroring physical neural responses in real-time.
          </Text>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.lg,
    marginTop: Theme.Spacing.sm,
  },
  avatarContainer: {
    position: 'relative',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    borderWidth: 1,
    borderColor: Theme.Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  pulseCircle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Theme.Colors.primary,
    zIndex: 1,
  },
  info: {
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  }
});
