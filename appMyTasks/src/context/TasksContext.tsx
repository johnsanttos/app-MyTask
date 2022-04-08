import React from 'react'

export interface IMyTaskContext {
    id: string;
    title: string
}

export const TaskContext = React.createContext <IMyTaskContext>(
    {} as IMyTaskContext, 
    );
