import React from 'react'
import Link from "next/link";
import { Todo } from "../../typings";

const fetchTodos = async () => {
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
            <Link href={"/todo/${todo.id}"}> Todo: {todo.id}
            </Link>
        </p>
    ))} 

    </>
  )
}

export default TodoList;