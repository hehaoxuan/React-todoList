import { useState } from "react";
import {todo_create} from './config/server'
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const todo = {title,body,author,isDone:false}
        setIsPending(true)
        
        fetch(todo_create(),{
            method:"POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(todo)
        }).then(()=>{
            setIsPending(false)
            // history.go(-1) //返回上一步
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a New Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>Todo Name:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                
                <label>Todo Detail:</label>
                <textarea
                type="text"
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
  
                <label>Todo Author:</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />

                {!isPending&&<button>Add new Todo</button>}
                {isPending&&<button>Add Todo...</button>}
            </form>
        </div>
    );
}
 
export default Create;