import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Theme } from '../theme/Theme';
import { Search, X } from 'lucide-react-native';

export const SearchSystem: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <Search color={Theme.Colors.outline} size={18} />
      <TextInput
        style={styles.input}
        placeholder="Query knowledge fabric..."
        placeholderTextColor={Theme.Colors.textMuted}
        value={query}
        onChangeText={setQuery}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery('')}>
          <X color={Theme.Colors.outline} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    marginHorizontal: Theme.Spacing.md,
    marginTop: Theme.Spacing.md,
    paddingHorizontal: Theme.Spacing.md,
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    marginLeft: Theme.Spacing.sm,
  }
});
