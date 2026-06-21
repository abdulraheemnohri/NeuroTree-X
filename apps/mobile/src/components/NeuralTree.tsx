import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Svg, { Circle, Line, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Theme } from '../theme/Theme';
import { Brain } from 'lucide-react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const NeuralTree: React.FC = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill} viewBox="0 0 400 400">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={Theme.Colors.primary} stopOpacity="0.2" />
            <Stop offset="50%" stopColor={Theme.Colors.primary} stopOpacity="0.8" />
            <Stop offset="100%" stopColor={Theme.Colors.secondary} stopOpacity="0.2" />
          </LinearGradient>
        </Defs>

        <Line x1="200" y1="200" x2="100" y2="100" stroke="url(#grad)" strokeWidth="1" strokeDasharray="4,4" />
        <Line x1="200" y1="200" x2="300" y2="100" stroke="url(#grad)" strokeWidth="1" />
        <Line x1="200" y1="200" x2="150" y2="300" stroke="url(#grad)" strokeWidth="1" strokeDasharray="2,2" />
        <Line x1="200" y1="200" x2="250" y2="300" stroke="url(#grad)" strokeWidth="1" />

        <Circle cx="100" cy="100" r="10" fill={Theme.Colors.glassBackground} stroke={Theme.Colors.primary} strokeWidth="1" />
        <Circle cx="300" cy="100" r="10" fill={Theme.Colors.glassBackground} stroke={Theme.Colors.secondary} strokeWidth="1" />
        <Circle cx="150" cy="300" r="10" fill={Theme.Colors.glassBackground} stroke={Theme.Colors.tertiary} strokeWidth="1" />
        <Circle cx="250" cy="300" r="10" fill={Theme.Colors.glassBackground} stroke={Theme.Colors.primary} strokeWidth="1" />
      </Svg>

      <Animated.View style={[styles.core, { transform: [{ scale: pulseAnim }] }]}>
        <View style={styles.coreInner}>
          <Brain color={Theme.Colors.primary} size={48} strokeWidth={1.5} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.4)',
    backgroundColor: 'rgba(0, 240, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Theme.Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  coreInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
