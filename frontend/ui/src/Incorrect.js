import { Link } from "react-router-dom";

const Incorrect = () => {
    localStorage.setItem('username',"");
    const signup=()=>{
        window.location='/signup';
    }
    const login=()=>{
        window.location='/';
    }
    return ( 
        <div className="create">
            <h2>Error!</h2>
            <h4>Username or Password not valid</h4>
            <h5 to='/'>Try Again</h5>
            <button onClick={login}>Login</button>
            <h6>Do not have an account? Please Login</h6>
            <button onClick={signup}>Signup</button>
        </div>
    );
}
 
export default Incorrect;