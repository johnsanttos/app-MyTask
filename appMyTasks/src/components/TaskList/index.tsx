import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { IMyTaskContext, TaskContext } from "../../context/TasksContext";
import { styles } from "./styles";



export const TaskList = () => {

    const tasks = React.useContext (TaskContext)
    console.log( tasks)


    return (
        
        <FlatList
        data={tasks as unknown as IMyTaskContext[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.buttonTask} >
                <Text style={styles.textTask}> {item.title} </Text>

            </TouchableOpacity>
        )}
    />
    )
}