import React from 'react'
import css from '../styles/main'
import Lines from './components/TableLine'

const MainComponent = css.MainWrapper
const Table = css.Table
const TableHead = css.TableHeader
const HeadCell = css.TableHeaderCell

export default function Header() {

  return (
    <React.Fragment>
      <MainComponent>

        <Table>

          <TableHead>
            <HeadCell>ID</HeadCell>
            <HeadCell>category</HeadCell>
            <HeadCell>name</HeadCell>
            <HeadCell>model</HeadCell>
            <HeadCell>SKU</HeadCell>
            <HeadCell>URL</HeadCell>
            <HeadCell>location</HeadCell>
            <HeadCell>jan</HeadCell>
            <HeadCell>mpn</HeadCell>
            <HeadCell>upc</HeadCell>
            <HeadCell>discount price</HeadCell>
            <HeadCell>price</HeadCell>
            <HeadCell>stock status</HeadCell>
            <HeadCell>manufacturer</HeadCell>
            <HeadCell>description</HeadCell>
            <HeadCell>attributes</HeadCell>
            <HeadCell>images</HeadCell>
            <HeadCell>date added</HeadCell>
            <HeadCell>date parsing</HeadCell>
            <HeadCell>date modified</HeadCell>
            <HeadCell>quantity</HeadCell>
            <HeadCell>status</HeadCell>
          </TableHead>
          <Lines/>

        </Table>

      </MainComponent>
    </React.Fragment>
  )

}