import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { FileText, Image as ImageIcon, Video } from 'lucide-react-native';

export const NeuralIndexingStatus: React.FC = () => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progressAnim, { toValue: 1, duration: 4000, useNativeDriver: false }),
        Animated.timing(progressAnim, { toValue: 0, duration: 0, useNativeDriver: false }),
      ])
    ).start();
  }, []);

  return (
    <GlassCard style={styles.card}>
      <Text style={Theme.Typography.labelCaps}>NEURAL_INDEXING_FLOW</Text>
      <View style={styles.row}>
        <View style={styles.item}>
          <FileText color={Theme.Colors.primary} size={16} />
          <Text style={Theme.Typography.codeSm}>DOCS</Text>
        </View>
        <View style={styles.item}>
          <ImageIcon color={Theme.Colors.secondary} size={16} />
          <Text style={Theme.Typography.codeSm}>MEDIA</Text>
        </View>
        <View style={styles.item}>
          <Video color={Theme.Colors.tertiary} size={16} />
          <Text style={Theme.Typography.codeSm}>SENSORS</Text>
        </View>
      </View>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.fill,
            {
              width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }),
              backgroundColor: Theme.Colors.primary
            }
          ]}
        />
      </View>
      <Text style={[Theme.Typography.codeSm, { fontSize: 8, marginTop: 4, textAlign: 'right' }]}>
        INDEXING_SPEED: 420 items/s
      </Text>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: Theme.Spacing.sm,
  },
  item: {
    alignItems: 'center',
    gap: 4,
  },
  track: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 1,
    overflow: 'hidden',
    marginTop: Theme.Spacing.sm,
  },
  fill: {
    height: '100%',
  }
});
