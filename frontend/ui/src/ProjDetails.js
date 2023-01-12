import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import {Link} from 'react-router-dom'

const ProjDetails = () => {
    const { id } = useParams();
    const {data:proj, error, isLoading} = useFetch('http://localhost:8000/my_project_api/' + id);
    const team=()=>{
        window.location='/team'
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {proj && (
                <article>
                    <h2>Id: {proj.proj_id}</h2>
                    <h2>Project: {proj.proj_name}</h2>
                    <h2>Manager: {proj.manager_name}</h2>
                    <p>Manager: {proj.manager_email}</p>
                    <div>Description: {proj.desc}</div>
                    <button onClick={team}>Team Details</button>
                </article>
            )}
            
        </div>
    );
}
 
export default ProjDetails;