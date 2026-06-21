import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import { Theme } from '../theme/Theme';
import { Send, Camera, Image as ImageIcon, Paperclip } from 'lucide-react-native';

export const MultiModalInput: React.FC = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <TouchableOpacity style={styles.iconButton}>
        <Paperclip color={Theme.Colors.outline} size={20} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Input synaptic intent..."
        placeholderTextColor={Theme.Colors.textMuted}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        multiline
      />

      <View style={styles.rightActions}>
        {text.length > 0 ? (
          <TouchableOpacity style={styles.sendButton}>
            <Send color="#000" size={18} />
          </TouchableOpacity>
        ) : (
          <View style={styles.mediaActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Camera color={Theme.Colors.outline} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <ImageIcon color={Theme.Colors.outline} size={20} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 21, 21, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    marginHorizontal: Theme.Spacing.md,
    marginBottom: Theme.Spacing.md,
    paddingHorizontal: Theme.Spacing.sm,
    paddingVertical: 4,
  },
  containerFocused: {
    borderColor: Theme.Colors.primary,
    shadowColor: Theme.Colors.primary,
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: Theme.Spacing.sm,
    maxHeight: 100,
  },
  iconButton: {
    padding: 10,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mediaActions: {
    flexDirection: 'row',
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Theme.Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  }
});
