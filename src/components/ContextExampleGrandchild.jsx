import { nameContext } from "./ContextExampleParent"
import {useContext} from 'react'
export default function ContextExampleGrandChild() {

    const name = useContext(nameContext);


    return(
        <div style={{backgroundColor: "black", padding: '3em', textAlign:'center', color: 'white'}}>
            I am the grandchild
            My grandparent's name is {name}
        </div>
    )
}