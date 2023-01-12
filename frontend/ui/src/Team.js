import {useState, useEffect} from 'react'
import TeamList from './TeamList';
import useFetch from './useFetch';

const Team = () => {
    const token=localStorage.getItem('username')
    const {data:teams, isLoading,error} = useFetch('http://127.0.0.1:8000/my_team_api/')

    const login=()=>{
        window.location='/login'
    }
    
    if(token.length>0){
        return ( 
            <div className="home">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {teams && <TeamList teams={teams} title="Team Details" />}
                {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Shree')} title="Shree's blogs"/> */}
            </div>
         );
    }
    return (
        <div className="blog-details">
            <h3 >Please Log in</h3>
            <button onClick={login}>Login</button>
        </div>
    )
}
 
export default Team;