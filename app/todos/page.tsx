import React from 'react';
import TodoList from "./TodoList";

function Todos() {
  return (
    <div>
        {/* {@ts-ignore} */}
        {/* @ts-expect-error Server Component */}
        <TodoList/>
    </div>
  )
}

export default Todos