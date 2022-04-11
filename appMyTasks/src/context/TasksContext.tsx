import React from 'react'

interface IProps {
    children: React.ReactElement
}


export interface IMyTaskContext {
    id: string;
    title: string
    addTask () : void
}

export const TaskContext = React.createContext<IMyTaskContext>(
    {} as IMyTaskContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({ children }) => {
const addTask = () => {
    console.log ('addTask action.')
}

    return (
        <TaskContext.Provider value={{ id: '1', title: 'Task01', addTask }}>
            {children}
        </TaskContext.Provider>
    )
}
