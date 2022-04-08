import React from 'react'
import { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native'
import { TaskList } from '../components/TaskList';
import { styles } from './styles'

interface Task {
    id: string;
    title: string
}

export const Home = () => {

    const [newTask, setNewTask] = React.useState('')
    const [tasks, setTasks] = React.useState<Task[]>([])

    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task empty',
        };

        setTasks([...tasks, data]);
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

    <TaskList tasks = {tasks}/>
                <Text style={{ color: '#fff' }}>{newTask} </Text>
            </View>
        </SafeAreaView>
    )
}