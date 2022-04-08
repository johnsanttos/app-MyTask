import React from 'react'
import { View, Text} from 'react-native'
import { TaskContext } from './src/context/TasksContext'
import { Home } from './src/Home'

const App =() =>{
    return (
     <TaskContext.Provider value={{id:'1', title:'Task01' }}>
        <Home/>
     </TaskContext.Provider>
    )
}

export default App