import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import Footer from './components/footer';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'exercise', key: '1'},
    {text: 'study', key: '2'},
    {text: 'code', key: '3'},
  ]);
  
  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler = (text) => {
    if (text.length > 2) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      console.log('ERROR');
      Alert.alert('Error', 'Todos must be over 3 characters long ...', [
        {text: 'OK', onPress:()=>console.log('alert closed')}
      ])
    }
  } 

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
          <View style={styles.test}>
              <Text style={styles.test1}>1</Text>
              <Text style={styles.test1}>2</Text>
              <Text style={styles.test1}>3</Text>
              <Text style={styles.test1}>4</Text>
              <Text style={styles.test1}>5</Text>
            </View>
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    flex: 1,
  },
  list:{
    flex: 1,
    marginTop: 20,
  },
  test: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  test1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
  }
});
