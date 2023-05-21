import { LOGIN_FAIL,
    LOGIN_SUCCESS,
  LOGIN_REQUEST,CELAR_ERRORS,REGISTER_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS } from "../Constants/userConstants"

export const userReducer=(state = { user:{} }  ,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOAD_USER_SUCCESS:
        return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
                return{
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload
            }
            case CELAR_ERRORS:
                return {
                     ...state,
                    error:null,
                }
            case LOAD_USER_FAIL:
                return{
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                }
            case LOGOUT_SUCCESS:
                return{
                    loading:false,
                    user:null,
                    isAuthenticated:false
                }
            case LOGOUT_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
            default:
                return state;
    }
}