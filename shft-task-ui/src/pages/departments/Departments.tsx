import React from 'react'
import { Table } from '../../components'
import { PageEnum } from '../../enums'
import './departments.css'
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers'

export default function Departments() {

  const appState = useSelector((state: State) => state.app)

  return (
    <div id='department-container'>

    <Table
      data={appState.departments.items}
      cols={[{key: "name", name: "Name"}]}
      page={PageEnum.DEPARTMENTS}
    />
    </div>
  )
}
