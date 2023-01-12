import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    localStorage.setItem('username',"");
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const history= useHistory();

    const signup=()=>{
        window.location='/signup';
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const team={username,password }
        console.log(team);
        setIsLoading(true);
        fetch('http://127.0.0.1:8000/loginn/',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(team)
        }).then((res)=>{
            var status=res.status
            console.log(status)
            if(status>400)
            {
                console.log('Errr');
                localStorage.setItem('username',"");
                window.location='/incorrect'
            }
            console.log(res)
            // console.log('Successfully Logged in!');
            localStorage.setItem('username',team.username);
            console.log(localStorage.getItem('username'));
            setIsLoading(false);
            history.push('/home');
        })
    }
    return ( 
        <div className="create">
            <h2>Autobots Login Page </h2>
            <form onSubmit={handleSubmit}>
                <h5>Username</h5>
                <input 
                    type='text' 
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                >
                </input>
                <h5>Password</h5>
                <input 
                    type='password'
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                >
                </input>
                {!isLoading && <button>Login</button>}
                {!isLoading && <div>
                    <h6>Do not have an account? Please Login</h6>
                    <button onClick={signup}>Signup</button>
                </div>}
                {isLoading && <button>Logging in...</button>}
            </form>
        </div>
     );
}
 
export default Login;