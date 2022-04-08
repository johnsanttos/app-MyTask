import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Task {
    id: string;
    title: string
}

interface TaskListProps {
    tasks: Task []
}
export const TaskList = (props: TaskListProps) => {
    return (
        
        <FlatList
        data={props.tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.buttonTask} >
                <Text style={styles.textTask}> {item.title} </Text>

            </TouchableOpacity>
        )}
    />
    )
}