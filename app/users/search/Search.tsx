'use client'

import {useRouter} from "next/navigation";
import React, {FormEvent , useState} from "react";

function Search() {

    const [search, setSearch]= useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
       router.push('/users/search/'+ search) //run on local host
       //router.push('http://localhost:3000/search/${search}')
    };


  return (
    <form onSubmit={handleSearch}>
        <input type="text" value={search} placeholder="Enter the Search Term" onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Search
        </button>

    </form>
  )
}

export default Search