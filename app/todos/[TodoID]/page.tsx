import React from 'react'
import { Todo } from "../../../typings";

type PageProps = {
    params: {
        TodoID: string;
    };
};

const fetchTodo = async (TodoID:string) => {
    console.log(TodoID)

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/'+TodoID);
    const todo: Todo []= await res.json();

    return todo;
    console.log(todo)
}


async function TodoPage({ params : {TodoID}} : PageProps) {    
    console.log(TodoID)
    const todo = await fetchTodo(TodoID);
    console.log(todo)


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