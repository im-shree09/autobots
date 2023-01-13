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
    const members=()=>{
        window.location='/team-members'
    }
    // console.log(id.id)
    const handleClick=()=>{
        fetch('http://localhost:8000/my_team_api/' + proj.team_id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/home');
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
                    <h5>Team lead: {proj.team_lead}</h5>
                    <h5>Email: {proj.team_lead_email}</h5>
                    <h5>Start Date: {proj.team_start_date}</h5>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleClick}>Delete</button>
                    <p></p>
                    <button onClick={members}>Team Members</button>
                </article>
            )}
                
        </div>
    );
}
 
export default TeamDetails;