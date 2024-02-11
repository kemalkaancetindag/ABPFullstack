import React, { useEffect } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import './layout.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { PageEnum } from '../../../enums'
import { Departments, Users } from '../../../pages'
import Modal from '../modal/Modal'
import UserDataModal from '../../users/data-modal/UsersDataModal'
import { useQuery } from 'react-query'
import { AppService, AuthService } from '../../../api/service'
import { bindActionCreators } from 'redux'
import { appActionCreators } from '../../../state/action-creators'
import DepartmentDataModal from '../../departments/department-data-modal/DepartmentDataModal'
import { Pagination } from '../../../constants.ts'




const determinePage = (page: string): React.JSX.Element => {
  switch (page) {
    case PageEnum.USERS:
      return <Users />
    case PageEnum.DEPARTMENTS:
      return <Departments />
    default:
      return <Users />
  }
}

export default function Layout() {

  const appState = useSelector((state: State) => state.app)
  const dispatch = useDispatch();
  const { setRoles, setDepartments, setUsers, setRefetchDepartment, setRefetchUser, setIsWorking, setDepartmentDataModalmode, setUserDataModalMode, setMe } = bindActionCreators(appActionCreators, dispatch)
  const { data: roles, error: rolesError, isLoading: rolesLoading } = useQuery("rolesData", AppService.getRoles);
  const { data: departments, error: departmentsError, isLoading: departmentsLoading, refetch: refetchDepartment } = useQuery("departmentsData", AppService.getDepartments);
  const { data: users, error: usersError, isLoading: usersLoading, refetch: refetchUser } = useQuery({
    queryKey: ['todos', appState.currentPage * Pagination.DOC_PER_PAGE],
    queryFn: ({ queryKey }) => AppService.getUsers(queryKey[1] as number),
  });




  useEffect(() => {
    if (!appState.me) {
      AuthService.getMe()
        .then((d) => {
          setMe(d)
        })
    }
  }, [appState.me])

  useEffect(() => {
    if (appState.refetchDepartment) {

      refetchDepartment()
        .then((r) => {
          setDepartments(r.data?.data)
          setRefetchDepartment(false)
          setDepartmentDataModalmode(undefined)
          setUserDataModalMode(undefined)
          setIsWorking(false)

        })

    }
  }, [appState.refetchDepartment])

  useEffect(() => {

    if (appState.refetchUser) {
      refetchUser()
        .then((r) => {
          setUsers(r.data?.data)
          setRefetchUser(false)
          setDepartmentDataModalmode(undefined)
          setUserDataModalMode(undefined)
          setIsWorking(false)
        })


    }
  }, [appState.refetchUser])

  useEffect(() => {
    if (!rolesLoading) {
      if (!rolesError) {

        setRoles(roles?.data.items)
      }
    }
  }, [rolesLoading])

  useEffect(() => {
    if (!departmentsLoading) {
      if (!departmentsError) {

        setDepartments(departments?.data)
      }
    }
  }, [departmentsLoading])

  useEffect(() => {
    if (!usersLoading) {
      if (!usersError) {
        setUsers(users?.data)
      }
    }
  }, [usersLoading])




  return (
    <>
      <div id='layout-wrapper'>
        <Sidebar />
        <div id='layout-right'>
          <Navbar />
          <div id='content'>
            {appState.me ?  determinePage(appState.page) : null}
          </div>
        </div>
      </div>
      {
        appState.me ?

          <>
            <Modal isOpen={appState.userDataModalMode !== undefined}>
              <UserDataModal />
            </Modal>
            <Modal isOpen={appState.departmentDataModalMode !== undefined}>
              <DepartmentDataModal />
            </Modal>
          </>
          : null
      }

    </>
  )
}
