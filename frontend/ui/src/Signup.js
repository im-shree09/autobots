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

    const login=()=>{
        window.location='/';
    }

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
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2 className="titles">Autobots Signup Page </h2>
            <form onSubmit={handleSubmit}>
                {/* <label>First Name:</label> */}
                <h5>First Name</h5>
                <input 
                    type='text' 
                    required
                    value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}
                >
                </input>
                <h5>Last Name</h5>
                <input 
                    type='text' 
                    required
                    value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}
                >
                </input>
                <h5>Username:</h5>
                <input 
                    type='text' 
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                >
                </input>
                <h5>Email Id:</h5>
                <input 
                    type='text' 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                >
                </input>
                <h5>Password:</h5>
                <input 
                    type='password'
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                >
                </input>
                <h5>Confirm Password:</h5>
                <input 
                    type='password'
                    required
                    value={password2}
                    onChange={(e)=> setCpassword(e.target.value)}
                >
                </input>
                {!isLoading && <button>Signup</button>}
                {!isLoading && <div>
                    <h6>Already have an account? Please Log in</h6>
                    <button onClick={login}>Login</button>
                </div>}
                {isLoading && <button>Logging in...</button>}
            </form>
        </div>
     );
}
 
export default Signup;