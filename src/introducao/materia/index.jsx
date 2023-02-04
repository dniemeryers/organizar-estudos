
import { useState } from "react";

import { Materia, Input, Button, ButtonRemove, Container,Div1 } from "./style";
import { Atividades } from "../Atividades";

const Materias = ({materia}) => {

    const [atividade, setAtividade] = useState([])

    function handleSave(data){
        let newAtividade = [...atividade]
        newAtividade.unshift(data)
        setAtividade(newAtividade)
    }

    const handleRemoveRepo = (itemToRemove) => {
        setAtividade(atividade.filter(data => data !== itemToRemove));
    }

    



    return(
        <>
        <Materia>
            <Container>               
                <Div1>
                    <Input defaultValue={materia}></Input>
                    <ButtonRemove onClick={()=>handleRemoveRepo()}>x</ButtonRemove>
                    <div>
                        <Input placeholder="Adicionar Atividades..."></Input>
                        <Button onClick={handleSave}>+</Button>
                    </div>
                </Div1>
            </Container>
           {atividade.map((data,item)=>(
           <Atividades key={item} atividade={'atividade'}/>
           ))} 
        </Materia>
        </>
    )
}

export {Materias}
