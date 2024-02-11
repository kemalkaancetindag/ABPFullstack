import React from 'react'
import Input from '../../reusable/input/Input'
import Select from '../../reusable/select/Select'
import Button from '../../reusable/button/Button'
import TextArea from '../../reusable/text-area/TextArea'
import './users-data-modal.css'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { useMutation } from 'react-query'
import { UserPost } from '../../../api/model'
import { UserService } from '../../../api/service'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators, userActionCreators } from '../../../state/action-creators'
import { UserCreate, UserUpdate } from '../../../api/model/UserModels'
import { UserDataModalModeEnum } from '../../../enums'
import { Department } from '../../../api/model/AppModels'
import { AlertService } from '../../../utils'

export default function UsersDataModal() {

  const appState = useSelector((state: State) => state.app)
  const userState = useSelector((state: State) => state.user)
  const dispatch = useDispatch()
  const {setUserEmail, setUserName, setUserSurname, setUserUsername, setUserPassword, setDepartment, setRole} = bindActionCreators(userActionCreators, dispatch)
  const {setRefetchUser, setIsWorking} = bindActionCreators(appActionCreators, dispatch)
  const createMutation = useMutation((data: UserCreate) =>
    UserService.create(data)
  );

  const updateMutation = useMutation((data: UserUpdate) =>
    UserService.update(userState.userId, data)
  );

  


  return (
    <>     
     <Input
        placeholder='jhondoe'
        label='Username'
        type='text'
        marginTop={64}
        callBack={setUserUsername}      
        value={userState.username}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />

      {
        appState.userDataModalMode === UserDataModalModeEnum.INFO 
        ? null
        : <Input
        placeholder='password'
        label='Password'
        type='password'
        marginTop={24}
        callBack={setUserPassword}
        value={userState.password}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      /> 
      }
    
       
      <Input
        placeholder='email@example.com'
        label='Email'
        type='email'
        marginTop={24}
        callBack={setUserEmail}
        value={userState.email}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />
      <Input
        placeholder='John'
        label='Name'
        type='text'
        marginTop={24}
        callBack={setUserName}
        value={userState.name}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />
       <Input
        placeholder='Doe'
        label='Surname'
        type='text'
        marginTop={24}
        callBack={setUserSurname}
        value={userState.surname}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />
      <Select
        marginTop={24} 
        label='Department'
        data={appState.departments.items}
        callBack={setDepartment}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />        
      <Select
        marginTop={24} 
        label='Role'
        data={appState.roles}
        callBack={setRole}
        disabled={appState.userDataModalMode === UserDataModalModeEnum.INFO}
      />          
      {
        appState.userDataModalMode === UserDataModalModeEnum.INFO 
        ? null
        :    <Button
        marginTop={32}
        marginBottom={32}
        text='Save'
        callBack={async () => {
          if(userState.username.length === 0) {
            AlertService.alert("Username can not be empty!")
            return
          }
          if(userState.name.length === 0) {
            AlertService.alert("Name can not be empty!")
            return
          }
          if(userState.surname.length === 0) {
            AlertService.alert("Surname can not be empty!")
            return
          }
          if(userState.email.length === 0) {
            AlertService.alert("Email can not be empty!")
            return
          }
          if(userState.role.length === 0) {
            AlertService.alert("Role can not be empty!")
            return
          }
          if(!userState.department) {
            AlertService.alert("Department can not be empty!")
            return
          }

          setIsWorking(true)
          switch(appState.userDataModalMode) {
            case UserDataModalModeEnum.CREATE:
              if(!userState.department) {
                AlertService.alert("Password can not be empty!")
                return
              }
              await createMutation.mutateAsync(
                {
                 user: {
                   userName: userState.username,
                   name: userState.name,
                   surname: userState.surname,
                   email: userState.email,
                   phoneNumber: "",
                   isActive: true,
                   lockoutEnabled: true,           
                   roleNames: userState.role,
                   password: userState.password
       
                 },
                 department: userState.department
                }
               )
               setRefetchUser(true)
               break;
            case UserDataModalModeEnum.EDIT:
              await updateMutation.mutateAsync(        
                {
                 user: {
                   userName: userState.username,
                   name: userState.name,
                   surname: userState.surname,
                   email: userState.email,
                   phoneNumber: "",
                   isActive: true,
                   lockoutEnabled: true,           
                   roleNames: userState.role,
                   password: userState.password
       
                 },
                 department: userState.department
                }
               )
               setRefetchUser(true)
               break;
          }
        }}
      />
      }
   
    
    </>
  )
}
