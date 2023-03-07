import React from "react"
import { Text,View,StyleSheet, TouchableOpacity } from "react-native"

export const Todo = ({ todo, onRemove }) => {  
    //const longPressHandler = () => { onRemove(todo.id)} - callback func you can put instead {onRemove.bind(null, todo.id)}
    // but smarter through metod bind

    return (
        <TouchableOpacity
        activeOpacity={0.5} 
        onPress={todo.id} //{()=> console.log('Pressed', todo.id)} - code for debug
        onLongPress={onRemove.bind(null, todo.id)} 
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        marginBottom: 10
    }
})