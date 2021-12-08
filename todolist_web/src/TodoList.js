import { DeleteTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const TodoList = ({ todos, title, rmTodo, checkedTodo, rmAllDone}) => {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <Button danger className='clearAll' onClick={()=> rmAllDone()}>Clear All Completed</Button>
            {
                todos.map((todo) => (
                    <div className="blog-preview" key={todo._id}>
                        <Link to={`/todos/${todo._id}`}>
                            <h2>{todo.title}</h2>
                            <p>initiator: {todo.author}</p>
                        </Link>
                        <input type="checkbox"
                            checked={todo.isDone}
                            onChange={() => checkedTodo(todo._id,!todo.isDone)} />
                        {/* 不能直接使用函数 应该加()=> */}
                        <DeleteTwoTone style={{ color: '#fff' }} twoToneColor="#f1356d" className="delete"
                            onClick={() => rmTodo(todo._id)} />
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;