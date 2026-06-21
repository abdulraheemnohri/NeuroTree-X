import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { Theme } from '../theme/Theme';

interface GlassCardProps extends ViewProps {
  children: React.ReactNode;
  intensity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style, intensity = 20, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <BlurView intensity={intensity} style={StyleSheet.absoluteFill} tint="dark" />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.Spacing.md,
    backgroundColor: Theme.Colors.glassBackground,
    borderWidth: 1,
    borderColor: Theme.Colors.glassBorder,
    overflow: 'hidden',
  },
  content: {
    padding: Theme.Spacing.md,
  },
});
