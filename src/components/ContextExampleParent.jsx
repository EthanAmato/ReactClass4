import { useState, createContext } from "react"
import ContextExampleChild from "./ContextExampleChild"

//createContext - you use it when you want to define a variable (usually an object with several
//pieces of information) that can be shared down n number of components
//Information to be sent

//useContext - receiver of the information sent by createContext

export const nameContext = createContext();

export default function ContextExampleParent() {
    const [name, setName] = useState("Ethan")

    return (
        <nameContext.Provider value={name}>
            <div style={{ backgroundColor: "lightgray", padding: '3em', textAlign: 'center' }}>
                I am the Parent
                my name is {name}
                <ContextExampleChild />
            </div>
        </nameContext.Provider>
    )
}