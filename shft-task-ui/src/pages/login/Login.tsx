import React from 'react'
import './login.css'
import { Button, Input } from '../../components'
import { AuthService } from '../../api/service'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators, authActionCreators } from '../../state/action-creators'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers'
import { AlertService } from '../../utils'


export default function Login() {
  let isAuth= window.localStorage.getItem("auth") !== null
  const dispatch = useDispatch();
  const {setIsWorking, setMe} = bindActionCreators(appActionCreators, dispatch)
  const {setAuthUsernameOrEmail, setAuthPassword} = bindActionCreators(authActionCreators, dispatch)
  const authState = useSelector((state: State) => state.auth)
  const navigate = useNavigate()

  if(isAuth) {
    return <Navigate to={'/'}/>
  }
 
  return (
    <div id='login-wrapper' className='d-flex row'>
      <div id='login-image'>
        

      </div>
      <div id='login-action'>
        <form className='d-flex col' id='login-form'>
          <h1 className='h1'>Login</h1>
          <Input 
            label='Username'
            placeholder='Username'
            type='text'
            marginBottom={32}
            marginTop={32}
            callBack={setAuthUsernameOrEmail}
            
          />
          <Input 
            label='Password'
            placeholder='Password'
            type='password'
            callBack={setAuthPassword}
            
          />
        <Button
          marginTop={32}
          text='Login'
          callBack={async () => {
            setIsWorking(true)
            if(authState.usernameOrEmail.length === 0) {
              setIsWorking(false)
              AlertService.alert("Username or Email can not be empty!")              
              return
            }

            if(authState.password.length === 0) {
              setIsWorking(false)
              AlertService.alert("Password can not be empty!")              
              return
            }
            try{
              const response = await AuthService.login({
                userNameOrEmailAddress: authState.usernameOrEmail,
                password:  authState.password,
                rememberMe: true
              })            
              if(response.data.result === 1) 
              {
                await AuthService.getCsfr();
                const me = await AuthService.getMe();                 
                setMe(me)
                window.localStorage.setItem("auth", "set")  
                setIsWorking(false) 
                navigate("/")
              } else {
                AlertService.alert("User not existing!")        
                setIsWorking(false) 
              }
            
            } catch(e) {
              
              AlertService.alert("Network error!")              
              setIsWorking(false) 
              return             
            }
         
            

          

           
                                 
            
          }}
        />
       
        </form>
      </div>
    </div>
  )
}
