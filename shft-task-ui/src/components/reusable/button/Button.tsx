import React from 'react'

import './button.css'

type ButtonProps = {
  text: string,
  marginTop?: number,
  marginBottom?: number,
  callBack: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button    
    onClick={(e) => {
      e.preventDefault()
      props.callBack();
    }}
    style={{
      marginTop: props.marginTop, 
      marginBottom: props.marginBottom
    }}
      className='button-default'
    >
      {props.text}
    </button>
  )
}
