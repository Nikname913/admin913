import React from 'react'
import css from '../../styles/main'

const Line = css.TableLine
const Cell = css.TableCell

export default function TableLine(props) {

  return (

    <React.Fragment>
      { [{},{},{},{},{},{},{},{},{},{}].map(($$,index) => {

        return (
          <Line>
            <Cell>{ ++index }</Cell>
            <Cell>category</Cell>
            <Cell>name</Cell>
            <Cell>model</Cell>
            <Cell>SKU</Cell>
            <Cell>URL</Cell>
            <Cell>location</Cell>
            <Cell>jan</Cell>
            <Cell>mpn</Cell>
            <Cell>upc</Cell>
            <Cell>discount price</Cell>
            <Cell>price</Cell>
            <Cell>stock status</Cell>
            <Cell>manufacturer</Cell>
            <Cell>description</Cell>
            <Cell>attributes</Cell>
            <Cell>images</Cell>
            <Cell>date added</Cell>
            <Cell>date parsing</Cell>
            <Cell>date modified</Cell>
            <Cell>quantity</Cell>
            <Cell style={{ borderRight: 'none' }}>status</Cell>
          </Line>
        )

      })}
    </React.Fragment>
  
  )

}