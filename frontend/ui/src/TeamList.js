import{Link} from 'react-router-dom'
const TeamList = ({teams,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {teams.map((team)=>(
                <div className="blog-preview" key={team.team_id}>
                    <Link to={`/my_team_api/${team.team_id}`}>
                        <h2>Team Name: {team.team_name}</h2>
                        <h5>Team Lead: {team.team_lead}</h5>
                        <h5>Project: {team.proj_name}</h5>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default TeamList;