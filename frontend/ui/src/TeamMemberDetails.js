import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch';
import {Link} from 'react-router-dom'

const TeamMemberDetails = () => {
    const history=useHistory()
    const { id } = useParams();
    const {data:proj, error, isLoading} = useFetch('http://localhost:8000/my_team_member_api/' + id);
    const handleEdit=()=>{
        // history.push(`/edit-member/${id}`);
        window.location='/edit-member/'+id;
    }
    const handleClick=()=>{
        fetch('http://localhost:8000/my_team_member_api/' + id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/home');
        })
    }
    const team=()=>{
        window.location='/team'
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {proj && (
                <article>
                    <h2>Id: {proj.team_member_id}</h2>
                    <h2>Name: {proj.name}</h2>
                    <h4>Role: {proj.role}</h4>
                    <h4>Email: {proj.email}</h4>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            
        </div>
    );
}
 
export default TeamMemberDetails;