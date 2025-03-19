import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState(['']);
  const [result, setResult] = useState(null);

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

  const handleAddition = () => {
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num || 0), 0);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = numbers.reduce((acc, num) => acc - parseFloat(num || 0));
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = numbers.reduce((acc, num) => acc * parseFloat(num || 1), 1);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = numbers.reduce((acc, num) => acc / parseFloat(num || 1));
    setResult(quotient);
  };

  const addInputField = () => {
    setNumbers([...numbers, '']);
  };

  const handleInputChange = (text, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = text;
    setNumbers(newNumbers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Text style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        AFANWI BRIAN
      </Animated.Text>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Advanced Calculator
      </Animated.Text>
      {numbers.map((number, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={number}
          onChangeText={(text) => handleInputChange(text, index)}
          placeholder={`Enter number ${index + 1}`}
          keyboardType="numeric"
        />
      ))}
      <TouchableOpacity style={styles.addButton} onPress={addInputField}>
        <Text style={styles.addButtonText}>Add Number</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddition}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiplication}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDivision}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      {result !== null && (
        <Animated.Text style={[styles.result, { opacity: fadeAnim }]}>
          Result: {result}
        </Animated.Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#841584',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#841584',
    padding: 15,
    borderRadius: 5,
    width: '22%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});