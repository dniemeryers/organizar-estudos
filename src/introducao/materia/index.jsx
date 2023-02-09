
import { useState } from "react";

import { Materia, Input, Input1, Button, ButtonRemove, Container,Div1,ButtonLimpar } from "./style";
import { Atividades } from "../Atividades";

const Materias = ({materia,fechar}) => {

    var id = id+1;

    const [inAtividade, setInatividade] = useState("")
    const [atividade, setAtividade] = useState([])

    function limpar(){
       setAtividade([])
       setInatividade('')
    }

    function handleSave(data2){       
        console.log(atividade)
        setAtividade(prevAtividade => [...prevAtividade,inAtividade])
        setInatividade("")        
    }

    return(
        <>
            <Materia>
                <Container>               
                    <Div1>
                        <Input1 defaultValue={materia} placeholder="Matéria"></Input1>
                        <div>
                            <Input value={inAtividade} onChange={event => setInatividade(event.target.value)}placeholder="Adicionar Atividades..."></Input>
                            <Button onClick={handleSave}>+</Button>
                        </div>
                    </Div1>
                </Container>
                {atividade.map((data2,id)=>(
                    <Atividades key={id} atividade={data2}/>
                 ))} 
                <ButtonLimpar onClick={limpar}>Limpar lista</ButtonLimpar>
                <ButtonRemove onClick={fechar}>x</ButtonRemove>
            </Materia>
        </>
    )
}
export {Materias}
