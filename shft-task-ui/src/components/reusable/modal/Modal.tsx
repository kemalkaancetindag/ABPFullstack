import React, { useState } from 'react'
import './modal.css'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { bindActionCreators } from 'redux'
import { appActionCreators, departmentActionCreators, userActionCreators } from '../../../state/action-creators'
import { useDispatch } from 'react-redux'

type ModalProps = {
    isOpen: boolean,
    children: React.JSX.Element
}

export default function Modal(props:ModalProps) {

  const dispatch = useDispatch()
  const { setUserDataModalMode, setDepartmentDataModalmode } = bindActionCreators(appActionCreators, dispatch)
  const {resetUserInfo} = bindActionCreators(userActionCreators, dispatch)
  const {resetDepartmentInfo} = bindActionCreators(departmentActionCreators, dispatch)

  return (
    <div className='modal-wrapper' style={{display: props.isOpen ? 'flex' : 'none', visibility: props.isOpen ? 'visible' : 'hidden'}}
      onClick={(e) => {
      
       setUserDataModalMode(undefined)
       setDepartmentDataModalmode(undefined)
        resetDepartmentInfo()
        resetUserInfo()
      }}
    >
        <div className='modal-container'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
            {props.children}
        </div>
    </div>
  )
}
