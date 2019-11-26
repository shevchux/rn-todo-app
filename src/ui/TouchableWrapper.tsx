import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

export const TouchableWrapper = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : (props: TouchableOpacity['props']) => React.createElement(
    TouchableOpacity, { ...props, activeOpacity: 0.7 },
  );
