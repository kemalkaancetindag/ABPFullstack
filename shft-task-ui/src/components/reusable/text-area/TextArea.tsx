import React, { useState } from 'react'
import './text-area.css'

type TextAreaProps = {
    label: string,
    marginTop?: number,
    marginBottom?: number
}

export default function TextArea(props: TextAreaProps) {
    const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='d-flex col' style={{marginTop: props.marginTop, marginBottom: props.marginBottom}}>
        <label style={{color: isFocused ? '#6750A4' : undefined}}>{props.label}</label>
        <textarea
            onFocus={() => setIsFocused(true)} 
            onBlur={() => setIsFocused(false)}  
            className='textarea-default'
        >
        </textarea>
    </div>
  
  )
}
