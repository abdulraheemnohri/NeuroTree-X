import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Network, Share2, ZoomIn, ZoomOut } from 'lucide-react-native';
import { NeuralTree } from './NeuralTree';

export const CyberTreeExplorer: React.FC = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Theme.Typography.labelCaps}>CYBER_TREE_EXPLORER</Text>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setZoom(z => Math.min(z + 0.1, 2))} style={styles.controlBtn}>
            <ZoomIn color={Theme.Colors.primary} size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setZoom(z => Math.max(z - 0.1, 0.5))} style={styles.controlBtn}>
            <ZoomOut color={Theme.Colors.primary} size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}>
            <Share2 color={Theme.Colors.primary} size={16} />
          </TouchableOpacity>
        </View>
      </View>

      <GlassCard style={styles.viewport}>
        <View style={{ transform: [{ scale: zoom }] }}>
          <NeuralTree />
        </View>
        <View style={styles.overlay}>
           <View style={styles.legend}>
              <View style={styles.legendItem}>
                 <View style={[styles.dot, { backgroundColor: Theme.Colors.primary }]} />
                 <Text style={[Theme.Typography.codeSm, { fontSize: 8 }]}>LOGIC_NODES</Text>
              </View>
              <View style={styles.legendItem}>
                 <View style={[styles.dot, { backgroundColor: Theme.Colors.secondary }]} />
                 <Text style={[Theme.Typography.codeSm, { fontSize: 8 }]}>AI_INFERENCE</Text>
              </View>
           </View>
        </View>
      </GlassCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Theme.Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.Spacing.sm,
  },
  controls: {
    flexDirection: 'row',
    gap: Theme.Spacing.sm,
  },
  controlBtn: {
    padding: 6,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 4,
  },
  viewport: {
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  legend: {
    gap: 4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  }
});
