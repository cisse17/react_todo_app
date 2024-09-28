 import React from 'react';
 import "../style.css";
 import { useState } from 'react';

 function generate_id(){
     return Math.floor(Math.random() * 100);

 } function Todo(){
     const [todos, setTodos] = useState([]);
     const [input, setInput] = useState("");

     const handleSubmit = ()=> {
         setTodos((todos) => 
             todos.concat({
                 text : input,
                 id : generate_id(),
             })
         )
         setInput("");     
     }
  
     const removeTodo = (id)=> {
         setTodos((todos) => todos.filter((t) => t.id !== id));

     };

   
   return (
     <>
        <div className='container'>
         <input type='text'  value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ajouter une tâche'/>

         <button onClick={handleSubmit}>Ajouter</button>

         <ul className='todo-list'>
             {todos.map(({text, id}) => {
                 return <li key={id} className='todo'>
                     <span>{text}</span>
                     <button className='supprimer' onClick={() => removeTodo(id)}>x</button>
                 </li>
             })}

         </ul>
        </div>

      
     </>
   )
 }

 export default Todo

