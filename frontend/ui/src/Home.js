import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    const {data:projs, isLoading,error} = useFetch('http://127.0.0.1:8000/my_project_api/')
    const {data:teams} = useFetch('http://127.0.0.1:8000/my_team_api/')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {projs && <BlogList project={projs} teams={teams} title="All Projects" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Shree')} title="Shree's blogs"/> */}
        </div>
     );
}
 
export default Home;