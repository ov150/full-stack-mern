import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(signInStart());
      const response = await fetch('/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(formData),
      });
      const data = response.json();

      console.log(data);
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }

      if(response.ok){
        dispatch(signInSuccess(data));
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
      <button type="submit" >
      {
        loading ? (
          <span> loading...</span>
        ) : ( <span>sign In</span> )
      } </button>
      {
        errorMessage && (
          <div>
            {errorMessage}
          </div>
        )
      }
    </form>
    </>
  )
}

export default SignIn