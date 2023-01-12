import {useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch';
import {Link} from 'react-router-dom'

const TeamDetails = () => {
    const { id } = useParams();
    const {data:proj, error, isLoading} = useFetch('http://localhost:8000/my_team_api/' + id);
    const history= useHistory()
    const handleEdit=()=>{
        history.push(`/edit-team/${id}`);
    }
    console.log(id.id)
    const handleClick=()=>{
        fetch('http://localhost:8000/my_team_api/' + proj.team_id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {proj && (
                <article>
                    <h2>Team Id: {id}</h2>
                    <h2>Team Name: {proj.team_name}</h2>
                    <h2>Team lead: {proj.team_lead}</h2>
                    <p>Email: {proj.team_lead_email}</p>
                    <Link to={`/team-members`}>Team Member Details</Link>
                    <p></p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
                
        </div>
    );
}
 
export default TeamDetails;