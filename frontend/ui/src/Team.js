import {useState, useEffect} from 'react'
import TeamList from './TeamList';
import useFetch from './useFetch';

const Team = () => {
    const {data:teams, isLoading,error} = useFetch('http://127.0.0.1:8000/my_team_api/')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {teams && <TeamList teams={teams} title="Team Details" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Shree')} title="Shree's blogs"/> */}
        </div>
     );
}
 
export default Team;