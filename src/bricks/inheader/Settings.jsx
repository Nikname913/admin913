import React from 'react'
import css from '../../styles/header'
import Input from '../components/TextInput'
import Button from '../components/Button'

const LineOne = css.HeaderSettings.LineOne
const LineOneWrapper = css.HeaderSettings.LineOneWrapper
const LineTwo = css.HeaderSettings.LineTwo
const LineTwoPagination = css.HeaderSettings.LineTwoPaginationWrapper
const PaginationFirst = css.HeaderSettings.LineTwoPaginationWrapperFirst
const PaginationLast = css.HeaderSettings.LineTwoPaginationWrapperLast
const PaginationForward = css.HeaderSettings.LineTwoPaginationWrapperForward
const PaginationBack = css.HeaderSettings.LineTwoPaginationWrapperBack
const PaginationPages = css.HeaderSettings.LineTwoPaginationWrapperPages

export default function Menu(props) {

  return (
    <React.Fragment>
      <LineOne>
        <LineOneWrapper style={{ justifyContent: 'flex-start', paddingLeft: 30 }}>
          <span style={{ fontSize: '13px' }}>всего:</span>
          <span 
            style={{ 
              fontSize: '13px', 
              borderRight: '1px solid grey', 
              marginRight: 8,
              paddingRight: 8,
              paddingLeft: 4
            }}
          >1000</span>
          <span 
            style={{ 
              fontSize: '13px', 
              borderRight: '1px solid grey',
              marginRight: 8,
              paddingRight: 8 
            }}
          >добавить товар</span>
          <span style={{ fontSize: '13px' }}>настройки</span>
        </LineOneWrapper>
        <LineOneWrapper style={{ justifyContent: 'flex-end', paddingRight: 30 }}>
          <span style={{ fontSize: '13px' }}>сортировка:</span>
          <span 
            style={{ 
              fontSize: '13px', 
              borderRight: '1px solid grey',
              marginRight: 8,
              paddingRight: 8,
              paddingLeft: 4
            }}
          >все</span>
          <span 
            style={{ 
              fontSize: '13px', 
              borderRight: '1px solid grey',
              marginRight: 8,
              paddingRight: 8,
            }}
          >давно не обновлялись</span>
          <span style={{ fontSize: '13px' }}>обновлялись сегодня</span>
        </LineOneWrapper>
      </LineOne>
      <LineTwo style={{ paddingLeft: 30, paddingTop: 10 }}>

        <Input
          setWidth={300}
          setHeight={36}
          placeholder={"ID, название или модель"}
          anyStyles={{
            paddingBottom: 2,
            paddingLeft: 11,
            marginRight: 10
          }}
        />
        <Button
          setWidth={140}
          setHeight={44}
          anyStyles={{
            backgroundColor: '#0EA7A0',
            color: 'white',
            lineHeight: '41px',
            boxSizing: 'border-box',
            marginRight: 30,
            borderRadius: 8
          }}
          inner={"Найти товар"}
        />

        <span style={{ fontSize: '13px', marginRight: 12 }}>НАЗВАНИЕ</span>
        <Input
          setWidth={300}
          setHeight={36}
          placeholder={"Выберите название категории"}
          anyStyles={{
            paddingBottom: 2,
            paddingLeft: 12,
            marginRight: 10
          }}
        />
        <span style={{ fontSize: '13px', marginRight: 12, marginLeft: 14 }}>НАЗВАНИЕ</span>
        <Input
          setWidth={300}
          setHeight={36}
          placeholder={"Выберите название бренда"}
          anyStyles={{
            paddingBottom: 2,
            paddingLeft: 12,
            marginRight: 10
          }}
        />

      </LineTwo>
      <LineTwo style={{ paddingLeft: 30, paddingTop: 18 }}>

        <span style={{ fontSize: '13px', marginRight: 14 }}>{ `0-10 из 100000 найденных` }</span>
        <span style={{ fontSize: '13px' }}>{ `С отмеченными` }</span>

        <Button
          setWidth={140}
          setHeight={41}
          anyStyles={{
            backgroundColor: 'grey',
            color: 'white',
            lineHeight: '38px',
            boxSizing: 'border-box',
            marginLeft: 8,
            marginRight: 10,
            borderRadius: 8
          }}
          inner={"Включить"}
        />

        <Button
          setWidth={140}
          setHeight={41}
          anyStyles={{
            backgroundColor: '#0EA7A0',
            color: 'white',
            lineHeight: '38px',
            boxSizing: 'border-box',
            marginRight: 40,
            borderRadius: 8
          }}
          inner={"Применить"}
        />

        <LineTwoPagination>
          <PaginationFirst>{"Первая"}</PaginationFirst>
          <PaginationBack>{"Ранее"}</PaginationBack>

          <PaginationPages>
            <span style={{ fontSize: '13px' }}>1</span>
            <span style={{ fontSize: '13px' }}>2</span>
            <span style={{ fontSize: '13px' }}>3</span>
            <span style={{ fontSize: '13px' }}>...</span>
            <span style={{ fontSize: '13px' }}>10000</span>
          </PaginationPages>

          <PaginationForward>{"Далее"}</PaginationForward>
          <PaginationLast>{"Последняя"}</PaginationLast>
        </LineTwoPagination>

      </LineTwo>
    </React.Fragment>
  )

}