import React, { useEffect, useState } from 'react'
import './select.css'
import { Department } from '../../../api/model/AppModels';
import { useSelector } from 'react-redux';
import { State } from '../../../state/reducers';
import Loading from '../loading/Loading';

type SelectProps = {
  marginTop?: number,
  marginBottom?: number,
  label: string,
  data: Department[],
  callBack: (data: any) => void,
  disabled?: boolean,  
}

export default function Select(props: SelectProps) {

  const [isFocused, setIsFocused] = useState(false);

  const appState = useSelector((state: State) => state.app)
  const userState = useSelector((state: State) => state.user)  

 

  useEffect(() => {
    if(appState.me.role.name === "employee") {
      props.callBack(["employee"])
    }
  }, [])


  return (
    <div className='d-flex col' style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}>
      <label className='input-label' style={{color: isFocused ? '#6750A4' : undefined}}>{props.label}</label>
       <select className='select-default'
          disabled={props.disabled || appState.me.role.name === "employee" && props.label !== "Department"}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)} 
          onChange={(e) => {
            switch(props.label) {
              case "Department":
                props.callBack({id: e.target.value, name: e.target.textContent!})
                break;
              case "Role":
                props.callBack([e.target.value])
            }            
          }}          
          
       >
        <option>Select {props.label}</option>
        {props.data.map((d: any, index: number) => {
          if(props.label === "Department"){
            return <option value={d.id} selected={userState.department?.name === d.name}>{d.name}</option>
          }  
          return <option value={d.name} selected={appState.me.role === "employee" ? d.name === "employee" : (userState.role[0] === d.name)} >{d.name}</option>

        })}
        
    </select>
    </div>
   
  )
}
