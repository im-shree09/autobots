import{Link} from 'react-router-dom'
const TeamMemberList = ({teams,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {teams.map((team)=>(
                <div className="blog-preview" key={team.team_member_id}>
                    <Link to={`/my_team_member_api/${team.team_member_id}`}>
                        <h2>Name: {team.name}</h2>
                        <p>Role: {team.role}</p>
                        <p>Team: {team.team_name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default TeamMemberList;