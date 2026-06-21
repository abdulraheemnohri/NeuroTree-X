import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { Mic } from 'lucide-react-native';

export const VoiceController: React.FC = () => {
  const bars = [useRef(new Animated.Value(0.2)).current, useRef(new Animated.Value(0.5)).current, useRef(new Animated.Value(0.3)).current, useRef(new Animated.Value(0.7)).current, useRef(new Animated.Value(0.4)).current];

  useEffect(() => {
    const animations = bars.map(bar =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, { toValue: Math.random(), duration: 500 + Math.random() * 500, useNativeDriver: false }),
          Animated.timing(bar, { toValue: 0.2, duration: 500 + Math.random() * 500, useNativeDriver: false }),
        ])
      )
    );
    animations.forEach(a => a.start());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orb}>
        <Mic color={Theme.Colors.primary} size={24} />
      </View>
      <View style={styles.waveContainer}>
        {bars.map((bar, i) => (
          <Animated.View
            key={i}
            style={[
              styles.waveBar,
              {
                height: bar.interpolate({ inputRange: [0, 1], outputRange: [4, 24] }),
                backgroundColor: i % 2 === 0 ? Theme.Colors.primary : Theme.Colors.secondary
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.sm,
  },
  orb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    height: 30,
  },
  waveBar: {
    width: 3,
    borderRadius: 1.5,
  }
});
