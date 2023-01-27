import React from 'react'
import Link from 'next/link';
import { Suspense } from "react";
import TodoList from "./users/todos/TodoList"

function Home() {
  return (
    <div className="text-center">
      
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
            {/* {@ts-ignore} */}
            {/* @ts-expect-error Server Component */}
            <TodoList/>
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading the Shopping Trolley...</p>}>      
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
            {/* {@ts-ignore} */}
            {/* @ts-expect-error Server Component */}
            <TodoList/>
        </div>
      </Suspense>

    </div>
  )
}

export default Home