import React from "react";


const Form = ({setInputText, todos, inputText, setTodos, setStatus}) =>{ //or indtead of using props (props) you can use ({setInputText, setTodos, })
    //JavaSCript code goes here
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    };
    const submitTodoHandler=(e)=>{
        e.preventDefault();  //prevents page reload
        setTodos([
           ...todos,{text: inputText, completed: false, id: Math.random()*1000} //for id install a package to get a unique id number this is not the ideal way of creating id 
        ]);
           /*Above code explanation
        ...props.todos means spread todos i.e. if i had todos already in the list just add it 
        and after the comma code means if we have a ne todo just add that new one*/
        setInputText("");
    };
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    };
    
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;