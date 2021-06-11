import React from "react";
import Item from './Item'

function List() {
  return (
    <div>
      <h2>List</h2>
      <ul>
        <Item />
        <Item />
      </ul>
    </div>
  );
}

export default List;
