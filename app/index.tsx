import React from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

function App() {
const [number1, setnumber1] = React.useState('');
const [number2, setnumber2] = React.useState('');
const [result, setresult] = React.useState('');
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {styles.container}
    >
        <TextInput
        style = {styles.input}
        onChangeText = {number => setnumber1(number)}
        value = {number1}
        keyboardType='numeric'
        />

        <TextInput
        style = {styles.input}
        onChangeText = {number => setnumber2(number)}
        value = {number2}
        keyboardType='numeric'
        />

        <Button
          title="Calculate"
          onPress={() => {
            const num1 = parseFloat(number1);
            const num2 = parseFloat(number2);
            const sum = num1 + num2;
            setresult(sum.toString());
          }}
        />
        <Text>
            Result: {result}
        </Text>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 40,
    }
  });

export default App;