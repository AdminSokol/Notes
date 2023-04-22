import React, {useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
import { Todolist } from './src/Todolist'


export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = title =>{

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title 
      }
    ])
  }  

  const removeTodo = id =>{
    setTodos(prev => prev.filter(todo => todo.id !== id))  //func filter
  }

  return (
    <View>
      <Navbar title='Заметки' />
      <View style={styles.container}>      
        <Todolist onSubmit={addTodo} />
        <FlatList                                                 //FlatList selected instead of ScrollView due to optimization performance
          keyExtractor={item =>item.id.toString()}
          data={todos}
          renderItem={({item})=>(<Todo todo={item} onRemove={removeTodo}/>)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({           //for View after block 'Navbar'
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
})
