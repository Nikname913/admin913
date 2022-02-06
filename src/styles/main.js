/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import styled from 'styled-components'

const css = {

  MainWrapper: styled.main`
    position: relative;
    width: 100%;
    height: calc(100vh - 300px);
    min-height: 100px;
    border-top: 2px solid rgb(14, 167, 160);
    margin-top: 26px;
    box-sizing: border-box;
    overflow: hidden;
    overflow-x: scroll;
  `,
  Table: styled.section`
    position: relative;
    width: 2300px;
    height: calc(100% - 40px);
    overflow-y: scroll;
    box-sizing: border-box;
  `,
  TableHeader: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 40px;
    box-shadow: 0px 0px 2.5px black;
    z-index: 20;
    box-sizing: border-box;
    background-color: #DDDDDD;
  `,
  TableHeaderCell: styled.span`
    display: block;
    position: relative;
    width: 110px;
    height: auto;
    min-height: 40px;
    font-size: 13px;
    text-align: center;
    line-height: 37px;
    box-sizing: border-box;
    cursor: pointer;
  `,
  TableCell: styled.span`
    display: block;
    position: relative;
    width: 110px;
    height: auto;
    min-height: 40px;
    border-right: 1px solid #DDDDDD;
    font-size: 13px;
    text-align: center;
    line-height: 37px;
    box-sizing: border-box;
    cursor: pointer;
  `,
  TableLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #DDDDDD;
    box-sizing: border-box;
  `,
}

export default css;