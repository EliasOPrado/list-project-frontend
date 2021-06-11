import React from "react";
import Item from './Item'

function List(props) {
  return (
    <div>
      <h2>{props.listName}</h2>
      <ul>
        <Item name={'Meu item'}/>
        <Item />
      </ul>
    </div>
  );
}

export default List;
