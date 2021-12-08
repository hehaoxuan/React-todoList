import { useParams,useHistory } from "react-router-dom"
import {todo_detail} from './config/server'
import useFetch from "./useFetch";
import { ArrowLeftOutlined } from '@ant-design/icons';


const TodoDetails = ()=>{
    const {id} = useParams();
    const {data:todo,error,isPending} = useFetch(todo_detail(id),'GET');
    const history = useHistory()
    
    return(
        <div className="blog-details">
            <div className="backIcon" onClick={()=>{history.push('/')}}>
                <ArrowLeftOutlined style={{fontSize:'20px'}}/>
            </div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {todo && (
                <article>
                    <h2> {todo.title}</h2>
                    <p> Create by {todo.author} </p>
                    <div>{todo.body}</div>
                </article>
            )
            }
            {/* <h2>Todo details - {id} </h2> */}
        </div>
    )
}

export default TodoDetails