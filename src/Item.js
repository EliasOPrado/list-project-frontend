import React from "react";

function Item(props) {
  const status = props.status;
  return (
    <li>
      {props.name} <div>Status: {status ? <div>Finalizado</div> : <div>Nao finalizado</div> }</div>
    </li>
  );
}

export default Item;
