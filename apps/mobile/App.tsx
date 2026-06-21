import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Theme } from './src/theme/Theme';
import { BrainMetrics } from './src/components/BrainMetrics';
import { NeuralTree } from './src/components/NeuralTree';
import { NodeInspector } from './src/components/NodeInspector';
import { LogStream } from './src/components/LogStream';
import { AIAgentGenesis } from './src/components/AIAgentGenesis';
import { VoiceController } from './src/components/VoiceController';
import { SystemHealth } from './src/components/SystemHealth';
import { MultiModalInput } from './src/components/MultiModalInput';
import { ResearchLab } from './src/components/ResearchLab';
import { HologramView } from './src/components/HologramView';
import { SimulationView } from './src/components/SimulationView';
import { DigitalTwin } from './src/components/DigitalTwin';
import { AIAssistant } from './src/components/AIAssistant';
import { SearchSystem } from './src/components/SearchSystem';
import { KnowledgeReview } from './src/components/KnowledgeReview';
import { SettingsPanel } from './src/components/SettingsPanel';
import { NetworkGraph } from './src/components/NetworkGraph';
import { AIAgentChat } from './src/components/AIAgentChat';
import { CyberTreeExplorer } from './src/components/CyberTreeExplorer';
import { NeuralIndexingStatus } from './src/components/NeuralIndexingStatus';
import { SystemTerminal } from './src/components/SystemTerminal';
import { LayoutGrid, Beaker, Settings, Terminal, Activity, Brain, MessageSquare, Network } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const BottomNavItem = ({ icon: Icon, active = false, onPress }: { icon: any, active?: boolean, onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={[styles.navItem, active && styles.navItemActive]}>
    <Icon color={active ? Theme.Colors.primary : Theme.Colors.outline} size={24} />
  </TouchableOpacity>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <SearchSystem />
            <SystemHealth />
            <AIAssistant />
            <BrainMetrics />
            <CyberTreeExplorer />
            <KnowledgeReview />
            <NeuralIndexingStatus />
            <NodeInspector />
            <LogStream />
          </ScrollView>
        );
      case 'lab':
        return (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <HologramView />
            <AIAgentGenesis />
            <DigitalTwin />
            <NetworkGraph />
            <ResearchLab />
            <SimulationView />
          </ScrollView>
        );
      case 'chat':
        return (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <AIAgentChat />
          </ScrollView>
        );
      case 'terminal':
        return (
          <View style={{ flex: 1 }}>
            <SystemTerminal />
          </View>
        );
      case 'settings':
        return (
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.settingsHeader}>
               <Brain color={Theme.Colors.primary} size={48} />
               <Text style={Theme.Typography.headlineMd}>Model Control Center</Text>
            </View>
            <SettingsPanel />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <View style={styles.statusDot} />
            <View>
              <Text style={Theme.Typography.headlineLg}>NEUROTREE X</Text>
              <Text style={Theme.Typography.labelCaps}>
                {activeTab === 'dashboard' ? 'MOBILE SYNAPTIC LINK' :
                 activeTab === 'lab' ? 'RESEARCH LABORATORY' :
                 activeTab === 'chat' ? 'SYNAPTIC DIALOG' :
                 activeTab === 'terminal' ? 'CORE TERMINAL' : 'SYSTEM CONFIGURATION'}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.syncButton}>
            <Activity color={Theme.Colors.primary} size={16} />
            <Text style={styles.syncText}>SYNC</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          {renderContent()}
        </View>

        <MultiModalInput />

        <View style={styles.bottomNav}>
          <BottomNavItem icon={LayoutGrid} active={activeTab === 'dashboard'} onPress={() => setActiveTab('dashboard')} />
          <BottomNavItem icon={Beaker} active={activeTab === 'lab'} onPress={() => setActiveTab('lab')} />
          <BottomNavItem icon={MessageSquare} active={activeTab === 'chat'} onPress={() => setActiveTab('chat')} />
          <BottomNavItem icon={Terminal} active={activeTab === 'terminal'} onPress={() => setActiveTab('terminal')} />
          <BottomNavItem icon={Settings} active={activeTab === 'settings'} onPress={() => setActiveTab('settings')} />
        </View>
      </KeyboardAvoidingView>

      <VoiceController />

      {/* Background Glows */}
      <View style={[styles.glow, styles.glowTop]} />
      <View style={[styles.glow, styles.glowBottom]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.background,
  },
  header: {
    padding: Theme.Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.md,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Theme.Colors.primary,
  },
  syncButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.Spacing.xs,
    paddingHorizontal: Theme.Spacing.md,
    paddingVertical: Theme.Spacing.sm,
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    borderRadius: Theme.Spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.2)',
  },
  syncText: {
    ...Theme.Typography.labelCaps,
    color: Theme.Colors.primary,
    letterSpacing: 1,
  },
  content: {
    flex: 1,
  },
  settingsHeader: {
    alignItems: 'center',
    paddingVertical: Theme.Spacing.xl,
    gap: Theme.Spacing.md,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: Theme.Spacing.md,
    backgroundColor: 'rgba(13, 21, 21, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  navItem: {
    padding: Theme.Spacing.sm,
    borderRadius: Theme.Spacing.md,
  },
  navItemActive: {
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
  },
  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    opacity: 0.05,
    zIndex: -1,
  },
  glowTop: {
    top: -100,
    left: -100,
    backgroundColor: Theme.Colors.primary,
  },
  glowBottom: {
    bottom: -100,
    right: -100,
    backgroundColor: Theme.Colors.secondary,
  },
});
