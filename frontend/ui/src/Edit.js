import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    const { id } = useParams();
    const [team_name, setTeamName] = useState('');
    const [team_start_date, setTeam_start_date] = useState('');
    const [team_end_date, setTeam_end_date] = useState('');
    const [team_lead, setTeam_lead] = useState('');
    const [team_lead_email, setTeam_lead_email] = useState('');
    const [proj_name, setProj_name] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    // const [student, setStudent] = useState({
    //     stuname: "",
    //     email: ""
    // });
    const [team,setTeam]=useState({
        team_name: "",
        team_start_date:"",
        team_end_date: "",
        team_lead: "",
        team_lead_email: "",
        proj_name: "",
    })
    useEffect(() => {
        async function getTeam() {
            try {
                const team = await axios.get(`http://54.212.0.128:8000/my_team_api/${id}`)
                // console.log(student.data);
                setTeam(team.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getTeam();
    }, [id]);

    function onTextFieldChange(e) {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://54.212.0.128:8000/my_team_api/${id}`, team)
            history.push("/")
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    function handleClick() {
        history.push("/")
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
                    onChange={(e) => setTeamName(e.target.value)}
                >
                </input>
                <label>Team start date:</label>
                <input
                    required
                    value={team_start_date}
                    onChange={(e) => setTeam_start_date(e.target.value)}
                >
                </input>
                <label>Team end date:</label>
                <input
                    required
                    value={team_end_date}
                    onChange={(e) => setTeam_end_date(e.target.value)}
                >
                </input>
                <label>Team Lead:</label>
                <input
                    type='text'
                    required
                    value={team_lead}
                    onChange={(e) => setTeam_lead(e.target.value)}
                >
                </input>
                <label>Team Lead email:</label>
                <input
                    type='email'
                    required
                    value={team_lead_email}
                    onChange={(e) => setTeam_lead_email(e.target.value)}
                >
                </input>
                <label>Project Name:</label>
                <input
                    type='text'
                    required
                    value={proj_name}
                    onChange={(e) => setProj_name(e.target.value)}
                >
                </input>
                {!isLoading && <button>Add Team</button>}
                {isLoading && <button>Adding Team...</button>}
            </form>
        </div>
    )
}

export default Edit