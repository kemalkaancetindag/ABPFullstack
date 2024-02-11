import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../../../api/service'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators } from '../../../state/action-creators'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'

export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dispatch = useDispatch()
  const appState = useSelector((state: State) => state.app)
  const {setIsWorking} = bindActionCreators(appActionCreators, dispatch)


  return (
    <nav id='nav-container'>      
      <button style={{position: "relative"}} onClick={() => {
        setIsDropdownOpen(!isDropdownOpen)
      }}>
        <FontAwesomeIcon icon={faUser} color='#BCB8BE'/>
        <span>{appState.me?.name}</span>
        <div id='logout-dd'
         onClick={(e) => {
          e.stopPropagation()
        }} 
        style={{
          display: isDropdownOpen ? "flex" : "none",
          visibility: isDropdownOpen ? "visible" : "hidden"
        }}>
            <button         
            onClick={async () => {
              setIsWorking(true)
              const response = await AuthService.logout()
              if(response.status === 204) {
                window.localStorage.clear()
                setIsWorking(false)
                window.location.reload()
              }
              setIsWorking(false)
            }}    
            >
              <FontAwesomeIcon icon={faRightFromBracket} color='#BCB8BE' style={{
                marginRight: 8
              }}/>
              Logout
            </button>
        </div>
      </button>
    </nav>
  )
}
