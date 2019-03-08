import React from 'react'
import './styles.css'

const ListItems = props => {
  const classNames = `list-reset ${props.classNames}`

  return <ul className={classNames}>{props.children}</ul>
}

export default ListItems
