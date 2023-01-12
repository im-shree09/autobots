import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={username,password }
        console.log(team);
        setIsLoading(true);
        fetch('http://127.0.0.1:8000/loginn/',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then(()=>{
            console.log('Successfully Logged in!');
            setIsLoading(false);
            history.push('/team');
        })
    }
    return ( 
        <div className="create">
            <h2>Autobots Login Page </h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type='text' 
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                >
                </input>
                <label>Password:</label>
                <input 
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                >
                </input>
                {!isLoading && <button>Login</button>}
                {isLoading && <button>Logging in...</button>}
            </form>
        </div>
     );
}
 
export default Login;