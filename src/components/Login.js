import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials,setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/users/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/");
            props.showAlert("Logged In","success")
        }
        else{
            navigate('/signup')
            props.showAlert("Please Create account to use iNoteBook","warning")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='my-3'>
            <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                <div className="mb-3">
                    <label htmlform="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name='email' id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlform="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
