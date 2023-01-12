import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [username,setUsername]=useState('');
    const [first_name,setFirstName]=useState('');
    const [last_name,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setCpassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={username,email, password,password2,first_name,last_name}
        // console.log(team);
        setIsLoading(true);
        fetch('http://127.0.0.1:8000/registerr/',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then(()=>{
            console.log('New team added!');
            setIsLoading(false);
            history.push('/login');
        })
    }
    return ( 
        <div className="create">
            <h2>Autobots Signup Page </h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    type='text' 
                    required
                    value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}
                >
                </input>
                <label>Last Name:</label>
                <input 
                    type='text' 
                    required
                    value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}
                >
                </input>
                <label>Username:</label>
                <input 
                    type='text' 
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                >
                </input>
                <label>Email Id:</label>
                <input 
                    type='text' 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                >
                </input>
                <label>Password:</label>
                <input 
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                >
                </input>
                <label>Confirm Password:</label>
                <input 
                    required
                    value={password2}
                    onChange={(e)=> setCpassword(e.target.value)}
                >
                </input>
                {!isLoading && <button>Login</button>}
                {isLoading && <button>Logging in...</button>}
            </form>
        </div>
     );
}
 
export default Signup;