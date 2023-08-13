import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const [credentials,setCredentials] = useState({name:"",email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/users/createuser",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/");
            props.showAlert("Account Created Successfully","success")
        }
        else{
          props.showAlert("User Already Exist","warning");
          navigate("/login");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div className='container mt-3'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={credentials.name} name='name' id="name" onChange={onChange} minLength={3} aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} minLength={3} aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} name='password' onChange={onChange} minLength={5} id="password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
