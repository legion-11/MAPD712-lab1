/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default function aboutMe() {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Text>Dmytro Andriichuk</Text>
    <Text>studentID 301132978</Text>
    </View>
  );
};
