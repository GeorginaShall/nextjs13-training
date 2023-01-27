import React from 'react'

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResult = {
    organic_results:[
        {
            position: number;
            title: string;
         //   link: string;
         //   thumbnail: string;
            snippet:string;
        }
    ];
};

const search = async (searchTerm:string) => {
    const res= await fetch(
      'https://serpapi.com/search.json?q='+searchTerm +'&api_key=236db8767b7d244df72bd228955797fd93e8eed72c303d0fcf7acc5c2badddec'
      //+ process.env.API_KEY     //run on local host
        // "https://serpapi.com/search.json?q=${searchTerm}&api_key={process.env.API_KEY}"

    );

    //throw new Error("ooops something broke");
    
    const data: SearchResult= await res.json();
    return data;
}


async function SearchResults({ params: {searchTerm}} : PageProps) {

    const SearchResults = await search(searchTerm);

    return (
    <div>
        <p className="text-gray-500 text-sm"> 
            You searched for: {searchTerm}
        </p>
        <ol className="space-y-5 p-5">
            {SearchResults.organic_results.map((result)=>(
                <li key={result.position} className="list-decimal">
                    <p className="font-bold">{result.title}</p>
                    <p>{result.snippet}</p>
                </li>
            ))}
        </ol>
    </div>
  );
}

export default SearchResults