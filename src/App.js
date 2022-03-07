import React,{useState, useEffect} from "react";
import './App.css';
//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setfilteredTodos] = useState([]);

  //Run once when the app starts
  useEffect(()=>{
    getLocalTodos();
  },[]);

  //UseEffect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();

  },[todos,status]);

  //Functions and Events
  const filterHandler = ()=>{    //Arrow function
    switch(status){ //Status = all, completed, uncompleted
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //Save to Local Host
  const saveLocalTodos = () =>{
    
    localStorage.setItem("todos",JSON.stringify(todos))

  };
  const getLocalTodos =()=>{
    if (localStorage.getItem("todos")===null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Joy's Todo List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        todos={todos} setTodos={setTodos} 
        inputText={inputText}
        setStatus={setStatus}
      
      />
        
        
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}

      />
    </div>
  );
}

export default App;
