import React from 'react'
import css from '../../styles/header'

const ButtonComponent = css.Button

export default function Button(props) {

  const { setWidth = null, 
    setHeight = null,
    anyStyles = null,
    inner = '' } = props

  return (

    <React.Fragment>
      <ButtonComponent
        style={anyStyles ? {
          ...anyStyles,
          width: setWidth && setWidth,
          height: setHeight && setHeight
        } : {
          width: setWidth && setWidth,
          height: setHeight && setHeight
        }}
      >{ inner !== '' && inner }</ButtonComponent>
    </React.Fragment>
  
  )

}