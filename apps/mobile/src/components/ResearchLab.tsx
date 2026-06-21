import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Theme } from '../theme/Theme';
import { GlassCard } from './GlassCard';
import { Beaker, FlaskConical, Microscope, Play, CheckCircle2 } from 'lucide-react-native';

const RESEARCH_TASKS = [
  { id: '1', title: 'Synaptic Weighting', icon: Beaker, status: 'RUNNING', progress: 0.64, color: Theme.Colors.primary },
  { id: '2', title: 'Neural Decay Analysis', icon: FlaskConical, status: 'PENDING', progress: 0, color: Theme.Colors.secondary },
  { id: '3', title: 'Quantum Flux Validation', icon: Microscope, status: 'COMPLETED', progress: 1, color: Theme.Colors.tertiary },
];

export const ResearchLab: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[Theme.Typography.labelCaps, { marginHorizontal: Theme.Spacing.md, marginBottom: Theme.Spacing.sm }]}>RESEARCH_LAB_ACTIVE</Text>
      <FlatList
        data={RESEARCH_TASKS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <GlassCard style={styles.taskCard}>
              <View style={styles.taskHeader}>
                <View style={[styles.iconBox, { backgroundColor: `${item.color}20` }]}>
                  <Icon color={item.color} size={20} />
                </View>
                <View style={styles.taskInfo}>
                  <Text style={[Theme.Typography.headlineMd, { fontSize: 16 }]}>{item.title}</Text>
                  <Text style={[Theme.Typography.labelCaps, { fontSize: 8, color: item.status === 'RUNNING' ? Theme.Colors.primary : Theme.Colors.outline }]}>
                    STATUS: {item.status}
                  </Text>
                </View>
                {item.status === 'RUNNING' ? (
                  <View style={styles.spinner}>
                    <Play color={item.color} size={16} />
                  </View>
                ) : item.status === 'COMPLETED' ? (
                   <CheckCircle2 color={Theme.Colors.tertiary} size={16} />
                ) : (
                  <TouchableOpacity>
                    <Play color={Theme.Colors.outline} size={16} />
                  </TouchableOpacity>
                )}
              </View>
              {item.status === 'RUNNING' && (
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: `${item.progress * 100}%`, backgroundColor: item.color }]} />
                </View>
              )}
            </GlassCard>
          );
        }}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.Spacing.md,
    flex: 1,
  },
  listContent: {
    paddingHorizontal: Theme.Spacing.md,
    gap: Theme.Spacing.sm,
  },
  taskCard: {
    padding: Theme.Spacing.md,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.md,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskInfo: {
    flex: 1,
  },
  progressContainer: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginTop: Theme.Spacing.md,
    borderRadius: 1,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  spinner: {}
});
