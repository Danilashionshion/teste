import React, {useState} from "react";
import Title from "./titulo";
import ItemLsita from "./itemLista";
import Button from "./button";
import { v4 } from 'uuid'

export function Lista(){
    const[titulo, setTitulo] = useState('')
    const[lista, setLista] = useState([
        { id: v4() ,marcada: false, descricao: ''}
    ])
    const adicionarItem = () => setLista([...lista, {id: v4() ,marcada: false, descricao: ''}])
    const alterarTitulo = valor => setTitulo(valor)
    const alterarDescricao = (valor,index) => {
        const arrayAux = [...lista]
        arrayAux[index]= {...lista[index], descricao: valor}
        setLista(arrayAux)
    }
    const setChecked = (checked, index) => {
        const arrayAux = [...lista]
        arrayAux[index]= {...lista[index], marcada: checked}
        setLista(arrayAux)
    }
    const onDelete = (index) => {
        let arrayAux = [...lista]
        arrayAux.splice(index, 1)
        setLista(arrayAux)
    }
    return(
        <>
            <Title
                alterarTitulo={alterarTitulo}
            />
            <br />
            { lista.map((item, index) => (
                <ItemLsita 
                    onChange={alterarDescricao}
                    setChecked={setChecked}
                    index={index}
                    onDelete={onDelete}
                    key={lista[index].id}/>

            ))}
            <Button adicionarItem={adicionarItem}/>
        </>
    )
}

export default Lista