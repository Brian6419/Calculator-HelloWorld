import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        AFANWI BRIAN
      </Animated.Text>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Hello, World!
      </Animated.Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 40,
    color: '#61dafb',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    color: '#61dafb',
    fontWeight: 'bold',
  },
});