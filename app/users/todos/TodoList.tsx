import React from 'react'
import Link from "next/link";
import { Todo } from "../../../typings";

const fetchTodos = async () => {

  //timeout with random value
const timeout = Math.floor(Math.random() * 5+1) *1000;
await new Promise((resolve) => setTimeout(resolve, timeout));

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();

    return todos;
    console.log(todos)

}

async function TodoList() {
    const todos  = await fetchTodos();



  return (
    <>
    {todos.map((todo) =>(
        <p key={todo.id}>
            <Link href={
             "/users/todos/"+ todo.id      //run on local host
           //"/todos/${todo.id}"
            }   
              
              > Todo: {todo.id}  
            </Link>
        </p>
    ))} 

    </>
  )
}

export default TodoList;