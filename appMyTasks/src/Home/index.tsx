import React from 'react'
import { useState, useContext } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native'
import { TaskList } from '../components/TaskList';
import {  useTaskList } from '../context/TasksContext';
import { styles } from './styles'


export const Home = () => {

    const [newTask, setNewTask] = React.useState('')


    const { addTask } = useTaskList()


    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task empty',
        };

        addTask(data)
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title} > Ola Dev </Text>

                <TextInput style={styles.input}
                    onChangeText={setNewTask}

                    placeholder='Nova tarefa'
                    placeholderTextColor='#555'
                />
                <TouchableOpacity
                    onPress={handleAddNewTask}

                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}
                    > Adicionar</Text>
                </TouchableOpacity>

                <Text style={styles.titleText}>Minhas Tarefas </Text>

                <TaskList />
              
            </View>
        </SafeAreaView>
    )
}