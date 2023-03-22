import ContextExampleGrandChild from "./ContextExampleGrandchild"


export default function ContextExampleChild() {



    return(
        <div style={{backgroundColor: "darkgray", padding: '3em', textAlign:'center'}}>
            I am the child
            <ContextExampleGrandChild/>
        </div>
    )
}