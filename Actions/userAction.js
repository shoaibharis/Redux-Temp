import { LOGIN_FAIL,
    LOGIN_SUCCESS,
  LOGIN_REQUEST,CELAR_ERRORS,REGISTER_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,LOGOUT_FAIL,LOGOUT_SUCCESS } from "../Constants/userConstants"

  import axios from "axios"

  //Login 
  export const login=(email,password)=>async  (dispatch) =>{
    try {
        dispatch({
            type:LOGIN_REQUEST
        })
        
        const config ={headers:{"Content-Type":"application/json"}}

        
        const {data}=await axios.post('/api/v1/login',{email,password},config)
        
        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    } catch (error) {
        dispatch({type: LOGIN_FAIL,
                   payload:error.response.data.message});
    }
  }

  //Register
  export const register=(userData)=>async  (dispatch) =>{
    try {
        dispatch({
            type:REGISTER_REQUEST
        })
        
        const config ={headers:{"Content-Type":"multipart/form-data"}}

        
        const {data}=await axios.post('/api/v2/register/Student',userData,config)
        
        dispatch({type:REGISTER_SUCCESS,payload:data.user})
        
    } catch (error) {
        dispatch({type: REGISTER_FAIL,
                   payload:error.response.data.message});
    }
  }
//Load user
  export const loadUser=()=>async  (dispatch) =>{
    try {
        dispatch({
            type:LOAD_USER_REQUEST
        })
        
        const config ={headers:{"Content-Type":"application/json"}}

        
        const {data}=await axios.get('/api/v1/me')
        
        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
    } catch (error) {
        dispatch({type: LOAD_USER_FAIL,
                   payload:error.response.data.message});
    }
  }

//Logout
export const logout=()=>async  (dispatch) =>{
  try {
      
      await axios.get('/api/v1/logout')
      
      dispatch({type:LOGOUT_SUCCESS})
  } catch (error) {
      dispatch({type: LOGOUT_FAIL,
                 payload:error.response.data.message});
  }
}

  //clearing erros
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CELAR_ERRORS
    })
    }

