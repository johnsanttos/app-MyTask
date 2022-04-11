import React from "react";
import { Alert, FlatList, Text, TouchableOpacity } from "react-native";
import {  ITask, TaskContext } from "../../context/TasksContext";
import { styles } from "./styles";



export const TaskList = () => {

    const {tasks, removeTask} = React.useContext (TaskContext)

const handleRemoveTask = (id: string) =>{
Alert.alert ('Tem certeza?', 'Deseja realmente excluir essa tarefa?',[
    {
        text: 'Cancelar',
        onPress: () => {}
    },
    {
        text: 'Excluir',
        onPress: () => removeTask (id)
    }
])
}

    return (
        
        <FlatList
        data={tasks as unknown as ITask[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.buttonTask} 
            onPress ={() => handleRemoveTask (item.id)}
            >
                <Text style={styles.textTask}> {item.title} </Text>

            </TouchableOpacity>
        )}
    />
    )
}