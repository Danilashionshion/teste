import React, { useState } from "react";

const ItemLsita = (props) => {
    const  [checked, setChecked] = useState(false)
    return(
        <>
            <div> 
                <input type="text" 
                    placeholder= 'Adicione uma descrição'
                    onChange={e => props.onChange(e.target.value, props.index)}/>
                <button className="del"
                onClick={() => props.onDelete(props.index)}>X</button>
                <input
                    type="checkbox"
                    onChange={e => props.setChecked(e.target.checked)} 
                    className="check"
                    />
            </div>
        </>
    )
}
export default ItemLsita