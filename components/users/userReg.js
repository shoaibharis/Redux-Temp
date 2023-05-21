import React,{Fragment, useState,useEffect} from 'react'
import "./user.css"
import Loader from "./Layout/Loader/Loader"
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from 'react-icons/md'
import { MdMailOutline } from 'react-icons/md'
import { MdLockOpen } from 'react-icons/md'
import { MdFace } from 'react-icons/md'
import { register,clearErrors } from '../../Actions/userAction'
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'


const UserReg = ({history}) => {

  const alert=useAlert();
  const dispatch=useDispatch();
  const {loading,error,isAuthenticated}=useSelector(state=>state.user)
  const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    });
    const {name,email,password}=user

    const [avatar,setAvatar]=useState("/Profile.png");
  
    const[avatarPreview,setAvatarPreview]=useState("/Profile.png");
  
    const registerSubmit=(e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name",name)
        
        myForm.set("email",email)
        
        myForm.set("password",password)
        
        myForm.set("avatar",avatar)
        dispatch(register(myForm));
    }

    useEffect(() => {
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }
      if(isAuthenticated){
        history.push("/account")
      }
    }, [alert,isAuthenticated,dispatch,error])
    

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          }
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setUser({ ...user, [e.target.name]: e.target.value });  
        }
    }
    return (
    <Fragment>
        <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
            <h2>Register Now</h2>
            <form
                className="signUpForm"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <MdFace />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                
                <div className="signUpEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <MdLockOpen />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>

        </div>
    </div>
    </Fragment>
  )
}

export default UserReg;