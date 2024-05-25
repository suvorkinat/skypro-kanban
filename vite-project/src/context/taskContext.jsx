import { createContext, useState } from "react"

export const  TaskContext = createContext(null);


export const TaskProvider = ({children}) => {
    const [cards, setCards] = useState([]);

    return <TaskContext.Provider value={{cards, setCards}}>
        {children}
    </TaskContext.Provider>
}