import React from "react";

export default function Card(props) {
  return (
    <>
      <div class="card">
        <div class="card-body">{props.children}</div>
      </div>
    </>
  );
}
