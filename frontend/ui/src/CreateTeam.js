import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateTeam = () => {
    const [team_name,setTeamName]=useState('');
    const [team_start_date,setTeam_start_date]=useState('');
    const [team_end_date,setTeam_end_date]=useState('');
    const [team_lead,setTeam_lead]=useState('');
    const [team_lead_email,setTeam_lead_email]=useState('');
    const [proj_name,setProj_name]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={team_name, team_start_date, team_end_date, team_lead, team_lead_email, proj_name}
        console.log(team);
        setIsLoading(true);
        fetch('http://localhost:8000/my_team_api/',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then(()=>{
            console.log('New team added!');
            setIsLoading(false);
            history.push('/team');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new team </h2>
            <form onSubmit={handleSubmit}>
                <label>Team name:</label>
                <input 
                    type='text' 
                    required
                    value={team_name}
                    onChange={(e)=>setTeamName(e.target.value)}
                >
                </input>
                <label>Team start date:</label>
                <input 
                    required
                    value={team_start_date}
                    onChange={(e)=> setTeam_start_date(e.target.value)}
                >
                </input>
                <label>Team end date:</label>
                <input 
                    required
                    value={team_end_date}
                    onChange={(e)=> setTeam_end_date(e.target.value)}
                >
                </input>
                <label>Team Lead:</label>
                <input 
                    type='text' 
                    required
                    value={team_lead}
                    onChange={(e)=>setTeam_lead(e.target.value)}
                >
                </input>
                <label>Team Lead email:</label>
                <input 
                    type='email' 
                    required
                    value={team_lead_email}
                    onChange={(e)=>setTeam_lead_email(e.target.value)}
                >
                </input>
                <label>Project Name:</label>
                <input 
                    type='text' 
                    required
                    value={proj_name}
                    onChange={(e)=>setProj_name(e.target.value)}
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
 
export default CreateTeam;