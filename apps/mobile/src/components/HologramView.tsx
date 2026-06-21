import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { Theme } from '../theme/Theme';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

export const HologramView: React.FC = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: 1, duration: 2000, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 2000, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Svg width="200" height="200" viewBox="0 0 200 200">
            <Defs>
              <LinearGradient id="hologramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor={Theme.Colors.primary} stopOpacity="0.1" />
                <Stop offset="50%" stopColor={Theme.Colors.primary} stopOpacity="0.5" />
                <Stop offset="100%" stopColor={Theme.Colors.secondary} stopOpacity="0.1" />
              </LinearGradient>
            </Defs>
            <Circle cx="100" cy="100" r="80" stroke="url(#hologramGrad)" strokeWidth="0.5" fill="none" />
            <Circle cx="100" cy="100" r="60" stroke={Theme.Colors.primary} strokeWidth="0.2" strokeDasharray="5,5" fill="none" />
            <Path
              d="M100 20 L180 100 L100 180 L20 100 Z"
              stroke={Theme.Colors.secondary}
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
            <Path
              d="M60 60 L140 60 L140 140 L60 140 Z"
              stroke={Theme.Colors.primary}
              strokeWidth="1"
              fill="none"
              opacity="0.2"
            />
          </Svg>
        </Animated.View>
      </Animated.View>
      <View style={styles.base} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  base: {
    width: 120,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 60,
    transform: [{ scaleX: 2 }],
    marginTop: -40,
    shadowColor: Theme.Colors.primary,
    shadowRadius: 20,
    shadowOpacity: 0.5,
  }
});
