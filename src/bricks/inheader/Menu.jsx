import React from 'react'
import css from '../../styles/header'

const HeadMenu = css.HeaderMenu.Menu
const MenuItem = css.HeaderMenu.MenuItem

export default function Menu(props) {

  return (
    <HeadMenu>
      <MenuItem>Каталог</MenuItem>
      <MenuItem>Магазины</MenuItem>
      <MenuItem>Категории</MenuItem>
      <MenuItem>Бренды</MenuItem>
      <MenuItem>Пользователи</MenuItem>
      <MenuItem>Отзывы</MenuItem>
      <MenuItem>SEO</MenuItem>
      <MenuItem>Настройки</MenuItem>
      <MenuItem>Выход</MenuItem>
    </HeadMenu>
  )

}