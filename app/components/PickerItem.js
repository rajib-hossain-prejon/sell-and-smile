import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    color: colors.secondary,
  },
});

export default PickerItem;
