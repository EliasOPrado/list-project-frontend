import React from "react";

function Item(props) {
  const status = props.status;
  return (
    <li>
      {props.name} <p>Status: {status ? <div>Finalizado</div> : <div>Nao finalizado</div> }</p>
    </li>
  );
}

export default Item;
