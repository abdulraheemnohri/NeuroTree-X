import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Svg, { Circle, Line, Defs, RadialGradient, Stop } from 'react-native-svg';
import { Theme } from '../theme/Theme';

export const NetworkGraph: React.FC = () => {
  const anims = [useRef(new Animated.Value(0)).current, useRef(new Animated.Value(0)).current, useRef(new Animated.Value(0)).current];

  useEffect(() => {
    anims.forEach((anim, i) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 1000),
          Animated.timing(anim, { toValue: 1, duration: 3000, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration: 0, useNativeDriver: true }),
        ])
      ).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Svg height="200" width="100%" viewBox="0 0 400 200">
        <Defs>
          <RadialGradient id="nodeGrad" cx="50%" cy="50%" rx="50%" ry="50%">
            <Stop offset="0%" stopColor={Theme.Colors.primary} stopOpacity="1" />
            <Stop offset="100%" stopColor={Theme.Colors.primary} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Line x1="50" y1="100" x2="350" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <Circle cx="50" cy="100" r="4" fill={Theme.Colors.primary} />
        <Circle cx="200" cy="100" r="6" fill={Theme.Colors.secondary} />
        <Circle cx="350" cy="100" r="4" fill={Theme.Colors.tertiary} />

        {anims.map((anim, i) => (
          <AnimatedCircle
            key={i}
            cx={anim.interpolate({ inputRange: [0, 1], outputRange: [50, 350] })}
            cy="100"
            r="3"
            fill={Theme.Colors.primary}
          />
        ))}
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: Theme.Spacing.md,
    borderRadius: 12,
  }
});
