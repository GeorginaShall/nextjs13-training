import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header className="p-5 bg-blue-500"> 

        <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
            Home
        </Link>
        <Link href="/users/todos" className="px-2 py-1 bg-white text-blue-500 rounded-lg ml-2">
            Todos
        </Link>
        <Link href="/users/search" className="px-2 py-1 bg-white text-blue-500 rounded-lg ml-2">
            Search
        </Link>
    </header>
  )
}

export default Header