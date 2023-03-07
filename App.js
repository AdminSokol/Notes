import React, {useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
import { Todolist } from './src/Todolist'


export default function App() {

  const [todos, setTodos] = useState([
    {id:'1', title: 'Ведь при открытии должна быть хотя бы одна запись согласно заданию'},  // 'id' shouldn't be type integer
    {id:'2',title: 'А будет две=). Для удаление записи - удерживайте запись пальцем(курсором)'}, // for an internship assignment=)
  ])

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
