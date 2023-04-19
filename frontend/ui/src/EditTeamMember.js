import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditTeamMember = () => {
    const id= useParams()
    const [name,setName]=useState('');
    const [role,setRole]=useState('');
    const [email,setEmail]=useState('');
    const [team_name,setTeam_name]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={name, role, email, team_name}
        console.log(team);
        setIsLoading(true);
        try{
            fetch(`http://54.212.0.128:8000/my_team_member_api/${id.id}/`,{
            method: 'PATCH',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then((response)=>{
            console.log(response);
            // console.log('Team Edited!');
            setIsLoading(false);
            history.push('/team-members');
        })
        }catch(err){
            console.log(err)
        }
        
    }
    return ( 
        <div className="create">
            <h2>Edit a team member</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type='text' 
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                >
                </input>
                <label>Role:</label>
                <input 
                    required
                    value={role}
                    onChange={(e)=> setRole(e.target.value)}
                >
                </input>
                <label>Email:</label>
                <input 
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                >
                </input>
                <label>Team Name:</label>
                <input 
                    type='text' 
                    required
                    value={team_name}
                    onChange={(e)=>setTeam_name(e.target.value)}
                >
                </input>
                
                {/* <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select> */}
                {!isLoading && <button>Update Team Member</button>}
                {isLoading && <button>Adding Team...</button>}
            </form>
        </div>
     );
}
 
export default EditTeamMember;