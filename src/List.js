import React from 'react'
import Item from './Item'

const List = ({ data, onDelete , onEdit}) => {
  return (
      <div>
         {
             data.map((item) => (
                 <Item {...item} key={item.id} onDelete={onDelete} onEdit={onEdit} />
             ))
         }
      </div>
  )
}

export default List