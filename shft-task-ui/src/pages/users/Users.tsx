import React from 'react'
import './users.css'
import { Table } from '../../components'
import Modal from '../../components/reusable/modal/Modal'
import { PageEnum } from '../../enums'
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers'

export default function Users() {

  const appState = useSelector((state: State) => state.app)
  
  return (
    <div id='user-container'>
      <Table data={appState.users.items ?? []} cols={[{ key: "name", name: "First Name" }, { key: "surname", name: "Last Name" }, { key: "email", name: "Email" }, { key: "department", name: "Department" }, { key: "role", name: "Role" },]} page={PageEnum.USERS} />
    </div>
  )
}
