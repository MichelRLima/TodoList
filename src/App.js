import React, { useState } from "react";
import './App.css';
import { BsTrash, BsBookmarkCheck, BsFillBookmarkCheckFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function App() {
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState ("")




function addTodo (){ //funcao para adicionar tarefa no array
    if (inputValue !== ""){
      setTodos([...todos, {task:inputValue, completed: false}]) //adiciona o objeto da tarfa no array
      setInputValue(""); //apagar o que foi escrito no input
    }
}

const completeTodo = (index) =>{ //funcao para marcar como completa a tarefa
  const finishTodos = [...todos] //pegando todas as tarefas de "todos"
  if(finishTodos[index].completed === false){
    
    finishTodos[index].completed = true; //adicionado como True no index da tarefa marcada como completada
  }else{

    finishTodos[index].completed = false; //adicionado como True no index da tarefa marcada como completada
  }
    setTodos(finishTodos); //retornar para o array "todos" as tarefas com o atributo "completd" atualizado
}

const removerTodo = (index) =>{
    const deleteTodo = [...todos] //pegando todas as tarefas de "todos"
    deleteTodo.splice(index,1) //deletenando apenas a tarefa que foi acionada
    setTodos(deleteTodo) //retornar para o array "todos" as tarefas atualizadas
}

  return (
    <div className="App">

      <div className="titulo">
        <p>Criado por <a target="_blanck" href="https://www.linkedin.com/in/michel-rocha-01b550210/">Michel Rocha</a> em React</p>
      </div>

      <div className="ContainerTodoList">
        <h2>Todo List</h2>
        <div className="ContainerTarefa">
          <textarea type="text" 
        placeholder="Digite sua tarefa" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}></textarea>
        

        <Button type="submit" value="Criar" onClick={addTodo} variant="secondary">Criar</Button>{' '}
        </div>
        <div>
          {todos.map((todo, index) =>(
            <div key={index} className="Todo">
          

             <h3 style={{textDecoration: todo.completed ? "line-through" : "" }}>{todo.task}</h3> {/* foi adicionado um estilo para quando for completado a tarefa */}
              
              <div className="acoes">
                <span onClick={() => removerTodo(index)}><BsTrash  /></span>{/* botao para acionar a funcao removerTodo */}

                <span onClick={() => completeTodo(index)}>{todo.completed===true ? <BsFillBookmarkCheckFill /> : <BsBookmarkCheck />}</span>{/* botao para acionar a funcao CompleteTodo*/}
              </div>
              
              </div> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
