
import { useState } from "react";

import { Materia, Input, Button, ButtonRemove, Container,Div1 } from "./style";
import { Atividades } from "../Atividades";

const Materias = ({materia}) => {
    const [inAtividade, setInatividade] = useState("")
    const [atividade, setAtividade] = useState([])

    function handleSave(data2){
        const atividade = {inAtividade}
        console.log(atividade)
        setAtividade(prevAtividade => [inAtividade, ...prevAtividade])
        setInatividade("")
        
    }

    return(
        <>
        <Materia>
            <Container>               
                <Div1>
                    <Input defaultValue={materia}></Input>
                    <ButtonRemove>x</ButtonRemove>
                    <div>
                        <Input value={inAtividade} onChange={event => setInatividade(event.target.value)}placeholder="Adicionar Atividades..."></Input>
                        <Button onClick={handleSave}>+</Button>
                    </div>
                </Div1>
            </Container>
           {atividade.map((data2,index)=>(
           <Atividades key={index} atividade={data2}/>
           ))} 
        </Materia>
        </>
    )
}

export {Materias}
