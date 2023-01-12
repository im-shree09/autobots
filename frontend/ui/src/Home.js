import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    const token=localStorage.getItem('username')
    

    const {data:projs, isLoading,error} = useFetch('http://127.0.0.1:8000/my_project_api/')
    const {data:teams} = useFetch('http://127.0.0.1:8000/my_team_api/')
    // if(!token)
    // {
    //     console.log(token);
    //     window.location='/login'
    // }
    // console.log(token)
    const login=()=>{
        window.location='/login'
    }
    if(token.length>0){
        return ( 
            <div className="home">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {projs && <BlogList project={projs} teams={teams} title="All Projects" />}
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

export default Home;