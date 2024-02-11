import React from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators } from '../../state/action-creators'
import { PageEnum } from '../../enums'
import { setRefetchDepartment, setRefetchUser } from '../../state/action-creators/appActionCreators'


export default function Sidebar() {

  const dispatch = useDispatch()
  const {changePage, setCurrentPage} = bindActionCreators(appActionCreators, dispatch)

  return (
    <div id='sidebar-container'>
        <h1 className='h1' style={{color: '#FFF', marginTop: 32, marginBottom: 24}}>Logo</h1>
      

        <a href='#' onClick={() => {
          setCurrentPage(0)
          setRefetchUser(true)
          changePage(PageEnum.USERS)
          
        }}>
          <FontAwesomeIcon 
            icon={faUsers} 
            color='#FFF'            
          />
          <span>Users</span>
        </a>

        <a href='#' onClick={() => {
          setCurrentPage(0)
          setRefetchDepartment(true)
          changePage(PageEnum.DEPARTMENTS)
          
        }}>
          <FontAwesomeIcon 
            icon={faBuilding} 
            color='#FFF'            
          />
          <span>Departments</span>
        </a>

     
    </div>
  )
}
