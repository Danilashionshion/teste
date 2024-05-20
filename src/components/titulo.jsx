import React, { useState } from "react";

export function Title(props) {
    return (
        <>
            <input placeholder="Escreva seu Título" 
                type="text"
                onChange={e => props.alterarTitulo(e.target.value)}
             />
        </>
    )
}

export default Title


