import React from "react";

export default function Alert(props) {
  const capitalized = (words)=>{
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
  }
  return (
    <div style={{height: "50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg} 
    </div>}
    </div>
  );
}
