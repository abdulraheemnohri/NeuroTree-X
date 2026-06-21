import React from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export const Assistant = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>AGI COMPANION</Text>
        <View style={styles.dot} />
      </View>
      <View style={styles.chat}>
        <View style={styles.bubble}>
          <Text style={styles.chatText}>Neural sync complete. I have identified 4 new research pathways for you today.</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Command the universe..."
          placeholderTextColor="#333"
          style={styles.input}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 14, fontWeight: '900' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#00f0ff' },
  chat: { flex: 1, padding: 20, justifyContent: 'flex-end' },
  bubble: { padding: 16, backgroundColor: '#0a0a0a', borderRadius: 20, borderBottomLeftRadius: 0, maxWidth: '80%' },
  chatText: { color: '#888', fontSize: 12, lineHeight: 18, fontFamily: 'monospace' },
  inputContainer: { padding: 20, borderTopWidth: 1, borderTopColor: '#111' },
  input: { height: 48, backgroundColor: '#050505', borderRadius: 24, px: 20, color: '#fff', fontSize: 12, paddingHorizontal: 20 }
});
