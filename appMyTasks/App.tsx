import React from 'react'
import { View, Text} from 'react-native'
import { TasksProvider } from './src/context/TasksContext'
import { Home } from './src/Home'

const App =() =>{
    return (
     <TasksProvider>
        <Home/>
     </TasksProvider>
    )
}

export default App