import React from 'react'
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
    params: {
        TodoID: string;
    };
};

const fetchTodo = async (TodoID:string) => {
    console.log(TodoID)

    const res = await fetch(
        
        'https://jsonplaceholder.typicode.com/todos/'+TodoID //run on local host
      // 'https://jsonplaceholder.typicode.com/todos/${TodoID}'
        
        , 
    {next : {revalidate:60 }}
    );

    const todo: Todo = await res.json();

    return todo;
    console.log(todo)
}


async function TodoPage({ params : {TodoID}} : PageProps) {    
    console.log(TodoID)
    const todo = await fetchTodo(TodoID);
    console.log(todo)

    if (!todo.id) return notFound()


    return (
<>
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg"> 
        <p> 
            #{todo.id}    

            : {todo.title}   
        </p>


        <p>
             completed: {todo.completed? "yes" : "no"}
        </p>

        <p className="border-t border-black mt-5 text-right">
            by user: {todo.userId}
        </p>

    </div>
    </>
  )
}

export default TodoPage

export async function generateStaticParams(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');

    const todos: Todo [] = await res.json();

    const trimmedTodos = todos.splice(0,10);

    return trimmedTodos.map(todo => ({
        TodoID : todo.id.toString(),
    }))
}