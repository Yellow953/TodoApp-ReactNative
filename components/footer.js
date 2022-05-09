import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Developped by Joe953.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer:{
    height: 80,
    padding: 20,
    backgroundColor: 'yellow',
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'orange',
  },
});
