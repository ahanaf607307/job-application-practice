import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import lottieAnimation from '../../../../src/assets/lottie.json';
import { AuthContext } from "../Firebase/AuthProvider";

function Register() {

  const {registerNewUser,setLoader,setUsers} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const registerUser = { name, photoUrl, email, password };
console.log(registerUser)
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password.length < 6) {
      setErrorInvalid("Password at least 6 carecter");
      return;
    }

    if (!validPassword.test(password)) {
      setErrorInvalid(
        "Password at least one Upparcase Letter , one LowerCase Letter "
      );
      return;
    }
    registerNewUser(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
    // const loginSuccessAlert = () => {
    //   Swal.fire({
    //     title: "Register Successfully",
    //     text: "Click Ok to Continue",
    //     icon: "success",
    //   });
    // };
  };
  return (
    <div className="md:flex justify-center items-center">
     
      <div><div className="border-2 rounded-xl shadow-2xl md:w-[390px] lg:w-[500px] my-10 md:my-32 mx-auto p-4 m-2 md:p-10">
      
      <h1 className="text-center font-semibold my-5 text-3xl">
        Register Your Account
      </h1>
      <form onSubmit={handleRegister} className="font-semibold text-gray-600">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Photo Url</span>
          </div>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo Url"
            className="input input-bordered w-full "
            required
          />
        </label>
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

        <input
          type="submit"
          value="Register"
          className="btn w-full bg-blue-500 my-5 text-white font-semibold"
        />
      </form>
      {/* <h1 className="my-2 text-red-600 mx-auto text-lg">{errorInvalid} </h1> */}
      <h1 className="my-10">
        Already Have an account ?{" "}
        <Link className="text-red-600 underline" to="/login">
          Login
        </Link>{" "}
      </h1>
    </div></div>
    <div>
      <Lottie animationData={lottieAnimation} />
    </div>
    </div>
  );
}

export default Register;
