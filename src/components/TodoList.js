import React from "react";
import Todo from "./Todo"
const TodoList = ({todos,setTodos,filteredTodos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo =>(
                    <Todo 
                        text={todo.text}
                        key={todo.id} //to remove the child key warning we get
                        todos={todos}
                        todo={todo} //we can pass each item we iterate through with map() down to child component
                        setTodos={setTodos}
                        filteredTodos={filteredTodos}
                    />
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList;