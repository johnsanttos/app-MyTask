import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { TaskList } from '../components/TaskList'

interface IProps {
    children: React.ReactElement
}


export interface IMyTaskContext {
    tasks: ITask[]
    addTask(task: ITask): void
    removeTask (id: string): void
}

const tasksData = '@MyTask:Task'

export interface ITask {
    id: string;
    title: string
}

export const TaskContext = React.createContext<IMyTaskContext>(
    {} as IMyTaskContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({ children }) => {

    const [data, setData] = React.useState<ITask[]>([]) // verificar se ja tem alguma informação em dados

    React.useEffect(() => {
        async function loadTask() {
            const taskList = await AsyncStorage.getItem(tasksData)

            if (taskList) {
                setData(JSON.parse(taskList)) //tansforma a lista em um array de objetos
            }
        }
        loadTask()

    }, [])

    const addTask = async (task: ITask) => {
        try {
            const newTaskList = [...data, task] // atualiza o contexto com uma nova lista
            await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
        } catch (error) {
            throw new Error(error as string)
        }
    }

    const removeTask = async (id: string) => {
        const newTaskList = data.filter(task => task.id !== id);
        setData (newTaskList)
        await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
    }

    return (
        <TaskContext.Provider value={{ tasks: data, addTask, removeTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTaskList(): IMyTaskContext {
    const constext = React.useContext(TaskContext)

    if (!constext) {
        throw new Error('useTaskList deve sem usado em um TasksProvider')
    }

    return constext

}