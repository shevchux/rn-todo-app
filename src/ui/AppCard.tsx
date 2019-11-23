import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface AppCardProps {
  children: React.ReactNode;
  style: ViewStyle;
}

export const AppCard: React.FC<AppCardProps> = ({ children, style = {} }) => (
  <View style={{ ...styles.default, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
