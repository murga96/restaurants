import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './navigations/Navigations';

export default function App() {
  return (
    //<View style={styles.container}>
    //  <Text>Hello World!</Text>
    //  <StatusBar style="auto" />
    //</View>
    <Navigations/>
  );
}
