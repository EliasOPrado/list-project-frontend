import React from "react";
import Item from './Item'

function List(props) {
  const items = props.items
  console.log(items)
  return (
    <div>
      <h2>{props.listName}</h2>
      <ul>
        {items.map(item => <Item key={item.id}name={item.name} status={item.done} /> )}
      </ul>
    </div>
  );
}

export default List;
