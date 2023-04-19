import TeamMemberList from './TeamMemberList';
import useFetch from './useFetch';

const TeamMember = () => {
    const {data:teams, isLoading,error} = useFetch('http://54.212.0.128:8000/my_team_member_api/')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {teams && <TeamMemberList teams={teams} title="All Team Members Details" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Shree')} title="Shree's blogs"/> */}
        </div>
     );
}
 
export default TeamMember;