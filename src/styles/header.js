/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import styled from 'styled-components'

const css = {

  BaseInput: styled.input`
    display: block;
    position: relative;
    border: none;
    outline: none;
    border-radius: 4px;
    box-shadow: 0px 0px 2.5px grey;
    box-sizing: border-box;
  `,
  Button: styled.span`
    display: block;
    position: relative;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 2.5px grey;
    cursor: pointer;
    font-size: 13px;
  `,
  HeaderMenu: {
    Menu: styled.div`
      position: relative;
      width: 1200px;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
    `,
    MenuItem: styled.span`
      position: relative;
      width: 10%;
      height: 44px;
      border: 1px solid grey;
      font-size: 12px;
      text-align: center;
      line-height: 43px;
      border-radius: 4px;
      font-family: "Ubuntu", sans-serif;
      cursor: pointer;
    `
  },
  HeaderSettings: {
    LineOne: styled.div`
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    `,
    LineOneWrapper: styled.div`
      position: relative;
      width: 600px;
      height: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
    LineTwo: styled.div`
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    `,
    LineTwoPaginationWrapper: styled.div`
      position: absolute;
      width: 540px;
      height: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      left: 100%;
      margin-left: -570px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    LineTwoPaginationWrapperFirst: styled.div`
      position: relative;
      width: 85px;
      height: auto;
      min-height: 20px;
      font-size: 13px;
      text-align: center;
      height: 36px;
      line-height: 34px;
      background-color: #DDDDDD;
      box-shadow: 0px 0px 2.5px grey;
      cursor: pointer;
    `,
    LineTwoPaginationWrapperLast: styled.div`
      position: relative;
      width: 85px;
      height: auto;
      min-height: 20px;
      font-size: 13px;
      text-align: center;
      height: 36px;
      line-height: 34px;
      background-color: #DDDDDD;
      border-radius: 4px;
      box-shadow: 0px 0px 2.5px grey;
      cursor: pointer;
    `,
    LineTwoPaginationWrapperForward: styled.div`
      position: relative;
      width: 85px;
      height: auto;
      min-height: 20px;
      font-size: 13px;
      text-align: center;
      height: 36px;
      line-height: 34px;
      background-color: #DDDDDD;
      border-radius: 4px;
      box-shadow: 0px 0px 2.5px grey;
      cursor: pointer;
    `,
    LineTwoPaginationWrapperBack: styled.div`
      position: relative;
      width: 85px;
      height: auto;
      min-height: 20px;
      font-size: 13px;
      text-align: center;
      height: 36px;
      line-height: 34px;
      background-color: #DDDDDD;
      border-radius: 4px;
      box-shadow: 0px 0px 2.5px grey;
      cursor: pointer;
    `,
    LineTwoPaginationWrapperPages: styled.div`
      position: relative;
      width: 120px;
      height: auto;
      min-height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
    `
  }
}

export default css;