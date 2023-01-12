import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateTeamMember = () => {
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
        fetch('http://localhost:8000/my_team_member_api/',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then(()=>{
            console.log('New team added!');
            setIsLoading(false);
            history.push('/team-members');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new team member </h2>
            <form onSubmit={handleSubmit}>
                <label>Member name:</label>
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
                <label>Team name:</label>
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
                {!isLoading && <button>Add Team</button>}
                {isLoading && <button>Adding Team...</button>}
            </form>
        </div>
     );
}
 
export default CreateTeamMember;