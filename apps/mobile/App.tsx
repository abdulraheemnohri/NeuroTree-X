import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dashboard } from './src/screens/Dashboard';
import { Explorer } from './src/screens/Explorer';
import { Assistant } from './src/screens/Assistant';
import { Settings } from './src/screens/Settings';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <Dashboard />;
      case 'Explorer': return <Explorer />;
      case 'Assistant': return <Assistant />;
      case 'Settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderContent()}
      </View>
      <View style={styles.tabBar}>
        {['Dashboard', 'Explorer', 'Assistant', 'Settings'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tab}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === tab ? '#00f0ff' : '#444' }
            ]}>
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  content: { flex: 1 },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  tab: { alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 8, fontWeight: 'bold' }
});
