import React from 'react'
import Menu from './inheader/Menu'
import Settings from './inheader/Settings'

export default function Header() {

  return (
    <React.Fragment>
      <Menu></Menu>
      <Settings></Settings>
    </React.Fragment>
  )

}