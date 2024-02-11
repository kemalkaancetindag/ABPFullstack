import React, { useEffect } from 'react'
import './table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActionCreators, departmentActionCreators, userActionCreators } from '../../../state/action-creators'
import { DepartmentDataModalModeEnum, PageEnum, UserDataModalModeEnum } from '../../../enums'
import { AppService, DepartmentService, UserService } from '../../../api/service'
import { useMutation, useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { Pagination } from '../../../constants.ts'

interface ColData {
  key: string,
  name: string
}

type TableProps = {
  page: string,
  cols: ColData[],
  data: any[],  
}

export default function Table(props: TableProps) {

  const dispatch = useDispatch()
  const { setUserDataModalMode, setDepartmentDataModalmode, setRefetchDepartment, setRefetchUser, setCurrentPage, setIsWorking  } = bindActionCreators(appActionCreators, dispatch)
  const appState = useSelector((state: State) => state.app)
  const { setEditInfoUser } = bindActionCreators(userActionCreators, dispatch)
  const {setEditInfoDepartment} = bindActionCreators(departmentActionCreators, dispatch)

  
 
 

  const deleteUserMutation = useMutation((userId: string) =>
    UserService.deleteR(userId)
  );

  const deleteDepartmentMutation = useMutation((departmentId: string) =>
    DepartmentService.deleteR(departmentId)
  );



  

  return (
    <div className='d-flex col'>
      <table>
        <tr>

          {
            props.cols.map((c) => (
              <th>{c.name}</th>
            ))
          }

          <th>
            {
              props.page === PageEnum.DEPARTMENTS 
              ? (
                appState.me.role.name !== "employee"
                ? <button onClick={() => {
                  switch (props.page) {
                    case PageEnum.DEPARTMENTS:
                      setDepartmentDataModalmode(DepartmentDataModalModeEnum.CREATE)
                      break;
                    case PageEnum.USERS:
                      setUserDataModalMode(UserDataModalModeEnum.CREATE)
                      break;
                  }
                }}>
                  <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
                  Add
                </button>
                : null
              )
              :<button onClick={() => {
                switch (props.page) {
                  case PageEnum.DEPARTMENTS:
                    setDepartmentDataModalmode(DepartmentDataModalModeEnum.CREATE)
                    break;
                  case PageEnum.USERS:
                    setUserDataModalMode(UserDataModalModeEnum.CREATE)
                    break;
                }
              }}>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
                Add
              </button>
            }
            
          </th>

        </tr>

        {
          props.data.map((d) => (
            <tr>
              {
                PageEnum.USERS === props.page
                  ?
                  (
                    <>
                      <td>
                        {d.user.name}
                      </td>
                      <td>
                        {d.user.surname ?? "-"}
                      </td>
                      <td>
                        {d.user.email}
                      </td>
                      <td>
                        {d.department ? d.department.name : "-"}
                      </td>
                      <td>
                        {d.roles[0]}
                      </td>
                    </>
                  ) : (
                    <td>
                      {d.name}
                    </td>
                  )
              }

              <td>
                <div className='table-action'

                >
                 
                  <a onClick={() => {

                    switch (props.page) {
                      case PageEnum.USERS:
                        setEditInfoUser(d)
                        setUserDataModalMode(UserDataModalModeEnum.INFO)
                        break;
                      case PageEnum.DEPARTMENTS:
                        setEditInfoDepartment(d)
                        setDepartmentDataModalmode(DepartmentDataModalModeEnum.INFO)
                        break;
                    }
                  }}>
                    <FontAwesomeIcon icon={faCircleInfo} size='lg' />
                  </a>
                  
                  {
                    appState.me.role.name !== "employee"
                    ?  <a
                    onClick={() => {
             
                      switch (props.page) {
                        case PageEnum.USERS:
                          console.log("INF")
                          console.log(d)
                          setEditInfoUser(d)
                          setUserDataModalMode(UserDataModalModeEnum.EDIT)
                          break;
                        case PageEnum.DEPARTMENTS:
                          setEditInfoDepartment(d)
                          setDepartmentDataModalmode(DepartmentDataModalModeEnum.EDIT)
                          break;
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size='lg' />
                  </a>
                  :null
                  }
                 {
                   appState.me.role.name !== "employee"
                   ?  <a
                   onClick={async () => {
                     switch (props.page) {
                       case PageEnum.USERS:
                         setIsWorking(true)
                         await deleteUserMutation.mutateAsync(d.user.id)
                         setRefetchUser(true)
                         break;
                       case PageEnum.DEPARTMENTS:
                         setIsWorking(true)
                         await deleteDepartmentMutation.mutateAsync(d.id)
                         setRefetchDepartment(true)                          
                         break;        
                     }
                   }}
                 >
                   <FontAwesomeIcon icon={faTrash} size='lg' color='red' />
                 </a>
                 :null
                 }
                 
                </div>
              </td>
            </tr>
          ))
        }


      </table>
      <div className='pagination-wrapper'>
        {      
          appState.page === PageEnum.USERS 
          ?   
           [...Array(Math.ceil(appState.users.totalCount / Pagination.DOC_PER_PAGE))].map((x, i) =>
              <a href='#' className={appState.currentPage === i ? "selected-link" : undefined} onClick={() => {
                setCurrentPage(i)
                setRefetchUser(true)
              }}>
              {i + 1}
            </a>
          )  :   [...Array(Math.ceil(appState.departments.totalCount / Pagination.DOC_PER_PAGE))].map((x, i) =>
          <a href='#' className={appState.currentPage === i ? "selected-link" : undefined} onClick={() => {
            setCurrentPage(i)
            setRefetchUser(true)
          }}>
          {i + 1}
        </a>
      ) 
        }
      
       
      </div>
    </div>

  )
}
