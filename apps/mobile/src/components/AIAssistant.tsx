import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { MessageSquare, Sparkles } from 'lucide-react-native';

const RESPONSES = [
  "Core sync complete. 1.2M nodes mapped.",
  "Warning: High synaptic decay in Node Delta.",
  "Predicting next knowledge cluster growth...",
  "Autonomous research phase Alpha starting.",
];

export const AIAssistant: React.FC = () => {
  const [message, setMessage] = useState(RESPONSES[0]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
        setMessage(RESPONSES[Math.floor(Math.random() * RESPONSES.length)]);
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <GlassCard style={styles.card}>
      <View style={styles.header}>
        <MessageSquare color={Theme.Colors.primary} size={16} />
        <Text style={Theme.Typography.labelCaps}>PERSONAL_AGI_v2</Text>
        <Sparkles color={Theme.Colors.tertiary} size={14} />
      </View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={[Theme.Typography.bodyMd, styles.message]}>"{message}"</Text>
      </Animated.View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    borderColor: 'rgba(0, 240, 255, 0.2)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.sm,
    marginBottom: Theme.Spacing.sm,
  },
  message: {
    fontStyle: 'italic',
    color: Theme.Colors.primary,
  }
});
