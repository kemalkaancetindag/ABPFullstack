import React from 'react'
import './loading.css'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
export default function Loading() {

  const appState = useSelector((state: State) => state.app)

  return (
    <div id='loader-wrapper' style={{
        display: appState.isWorking ? "flex" : "none",
        visibility: appState.isWorking ? "visible" : "hidden"
    }}>
        <span className='loader'></span>
    </div>
  )
}
