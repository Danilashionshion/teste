import React from "react";

export function Button(props){
    return(
        <button onClick={props.adicionarItem} className="add">+</button>
    )
}

export default Button