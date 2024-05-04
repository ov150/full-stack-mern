import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange =(event) =>{
    setFormData({
      ...formData, 
      [event.target.id] : event.target.value,
    })
  }
  console.log(formData);

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
      const response = await fetch('/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(formData),
      });
      const data = response.json();
      console.log(data);

      if(response.ok){
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div>SignIn</div>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor=""> email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="enter your email"
        onChange={handleChange}
      />
      </div>
      <div>
      <label htmlFor=""> password</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="enter your password"
        onChange={handleChange}
      />
      </div>
      <button type="submit"> Sign In</button>
    </form>
    </>
  )
}

export default SignIn