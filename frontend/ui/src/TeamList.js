import{Link} from 'react-router-dom'
const TeamList = ({teams,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {teams.map((team)=>(
                <div className="blog-preview" key={team.team_id}>
                    <Link to={`/my_team_api/${team.team_id}`}>
                        <h2>Team Name: {team.team_name}</h2>
                        <p>Team Lead: {team.team_lead}</p>
                        <p>Project: {team.proj_name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default TeamList;