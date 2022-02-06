import React from 'react'
import css from '../../styles/header'

const TextInput = css.BaseInput

export default function Input(props) {

  const { setWidth = null, 
    setHeight = null,
    placeholder = '',
    anyStyles = null } = props

  return (

    <React.Fragment>
      <TextInput
        style={anyStyles ? {
          ...anyStyles,
          width: setWidth && setWidth,
          height: setHeight && setHeight
        } : {
          width: setWidth && setWidth,
          height: setHeight && setHeight
        }}
        placeholder={placeholder && placeholder}
      />
    </React.Fragment>
  
  )

}