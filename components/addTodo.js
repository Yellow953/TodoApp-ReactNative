import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New Todo ...'
        onChangeText={changeHandler}
      />
      <Button 
        onPress={() => submitHandler(text)}
        title='Add'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor:'#ddd',
    borderRadius: 10,
  },
});
