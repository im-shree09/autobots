import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditTeam = () => {
    const id= useParams()
    // const [team_id,setTeamid]=useState();
    const [team_name,setTeamName]=useState('');
    const [team_start_date,setTeam_start_date]=useState('');
    const [team_end_date,setTeam_end_date]=useState('');
    const [team_lead,setTeam_lead]=useState('');
    const [team_lead_email,setTeam_lead_email]=useState('');
    const [proj_name,setProj_name]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();
    // var index= teams.map(function(e){
    //     return e.team_id;
    // }).indexOf(team_id);

    // console.log(id.id);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={team_name, team_start_date, team_end_date, team_lead, team_lead_email, proj_name}
        console.log(team);
        setIsLoading(true);
        try{
            fetch(`http://localhost:8000/my_team_api/${id.id}/`,{
            method: 'PATCH',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
            // body: {
            //     'team_id': id.id,
            //     'team_name': team_name,
            //     'team_start_date': team_start_date,
            //     'team_end_date': team_end_date,
            //     'team_lead': team_lead,
            //     'team_lead_email': team_lead_email,
            //     'proj_name': proj_name
            // }
        }).then((response)=>{
            console.log(response);
            // console.log('Team Edited!');
            setIsLoading(false);
            history.push('/team');
        })
        }catch(err){
            console.log(err)
        }
        // comment
        
    }
    return ( 
        <div className="create">
            <h2>Edit a team </h2>
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
 
export default EditTeam;