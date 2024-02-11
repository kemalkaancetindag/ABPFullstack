import React, { useState } from 'react'
import './input.css'

type InputProps = {
  placeholder: string,
  label: string,
  type: string,
  marginTop?: number,
  marginBottom?: number,
  width?: number,
  height?: number,
  callBack?: (data: string) => void,
  value?: string,
  disabled?: boolean
}

export default function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='d-flex col' style={{ marginTop: props.marginTop, marginBottom: props.marginBottom,  }}>
      <label className='input-label' style={{color: isFocused ? '#6750A4' : undefined}}>{props.label}</label>
      <input 
        readOnly={props.disabled}
        value={props.value}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
        onChange={props.callBack ? (e) => props.callBack!(e.target.value) : undefined}
        style={{ height: props.height, width: props.width }} 
        className='input-default' 
        type={props.type} 
        placeholder={props.placeholder} 
      />
    </div>
  )
}
