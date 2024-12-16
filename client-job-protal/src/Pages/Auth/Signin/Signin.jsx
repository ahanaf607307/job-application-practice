import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { IoLogoGoogleplus } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottie from '../../../assets/loginLottie.json';
import { AuthContext } from '../Firebase/AuthProvider';
import axios from 'axios';
function Signin() {

  const {signInUser,setUsers,googleLoginUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginUser = { email, password };
    if (password.length < 6) {
      return;
    }
signInUser(email,password)
    .then(result => {
      console.log('signin User is -->',result.user.email)
      setUsers(result.user)
      // navigate(from)
      const user = {email : email}
      axios.post('http://localhost:5000/jwt' , user , {withCredentials: true})
      .then(res => {
        console.log(res.data )
      })


    })
    .catch(error => {
      console.log('error from login/signin -> ' , error.message)
    })

   
       
    
  };
const handleGoogle = () => {
  googleLoginUser()
  .then(result => {
    console.log(result.user)
  })
  .catch(error => {
    console.log('error from google login ->' , error)
  })
}
  
  return (
    <div className='md:flex justify-center items-center md:gap-x-5'>
      <div>
      <div className="border-2 rounded-xl shadow-2xl md:w-[500px] my-10 md:my-32 mx-auto p-4 m-2 md:p-10">
    
    <h1 className="text-center font-semibold my-5 text-3xl">Login Your Account</h1>
    <form onSubmit={handleLogin} className="font-semibold text-gray-600">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full "
          required
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full "
          required
        />
      </label>
      <input type="submit" value="Login" className="btn text-white w-full bg-blue-500 mt-8" />
    </form>
    {/* <h1 className="my-3 text-red-600 mx-auto text-lg">{errorInvalid} </h1> */}
    <button className="btn mt-5 bg-blue-200" onClick={handleGoogle}>
      Login With Google{" "} <IoLogoGoogleplus className="text-emerald-600 text-xl" />
    </button>
    <h1 className="my-10">
      New User ?{" "}
      <Link className="text-red-600 underline" to="/register">
        Register
      </Link>{" "}
    </h1>
  </div>
      </div>
      <div>
<Lottie animationData={loginLottie}/>
      </div>
    </div>
  );
}

export default Signin
