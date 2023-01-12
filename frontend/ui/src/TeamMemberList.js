import{Link} from 'react-router-dom'
const TeamMemberList = ({teams,title}) => {
    const token=localStorage.getItem('username')

    const login=()=>{
        window.location='/login'
    }
    if(token.length>0)
    {
        return ( 
            <div className="blog-list">
                <h2>{title}</h2>
                {teams.map((team)=>(
                    <div className="blog-preview" key={team.team_member_id}>
                        <Link to={`/my_team_member_api/${team.team_member_id}`}>
                            <h2>Name: {team.name}</h2>
                            <h4>Role: {team.role}</h4>
                            <h5>Team: {team.team_name}</h5>
                        </Link>
                    </div>
                ))}
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
 
export default TeamMemberList;