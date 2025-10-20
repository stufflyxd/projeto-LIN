import React from "react";
import './list.css'
function List(){

  const arr = ['Oi', 'TUdo bom']  
  return (
    <ul className="list-group">{arr.map((item, index) => <li className='list-group-item'key={index}>{item}</li>)}</ul>
  )
}

export default List;