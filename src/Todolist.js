import React, { useState } from 'react'
import {View,StyleSheet, TextInput, Button, Alert} from 'react-native'

export const Todolist = ({onSubmit}) => {
    const [value, setValue] = useState('')      //array

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')                //After sending the note
        }   else {
            Alert.alert('Текст для заметки не может быть пустым')  //Accounting for an empty error
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Введите текст..."
            autoCorrect={false}
            autoCapitalize='none'
            />
            <Button title='Добавить'
            onPress={pressHandler} 
            />         
        </View>
    )
}

const styles = StyleSheet.create({              //func for View and TextInput  
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})