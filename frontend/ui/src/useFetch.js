import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [isLoading, setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        // fetch('http://localhost:8000/blogs')
        fetch(url)
            .then(res=>{
                if(!res.ok)
                {
                    throw Error('Could not fetch resources!')
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err=>{
                setIsLoading(false);
                setError(err.message);
            })
    },[url]);
    return {data,isLoading,error}
}
 
export default useFetch;