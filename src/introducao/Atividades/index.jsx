import React, {useState} from 'react';

import {Container, Atividade, Data, DiasFalta, Descricao, Container2} from './style'

const Atividades = ({atividade}) => {

    const [dataAtividade, setDataatividade] = useState('')
     

       const newDate = new Date();
       console.log(newDate)
       

       
       
    return (
        <>
        <Container2>
            <Container>
                <div>
                  <Atividade defaultValue={atividade} placeholder="Atividade"></Atividade>
                  <Data value={dataAtividade} onChange={event => setDataatividade(event.target.value)-newDate}type="date"></Data>
                </div>
            <DiasFalta></DiasFalta>
            </Container>           
            <Descricao placeholder='Descrição...'>               
            </Descricao>
        </Container2>
        </>
    )
    }

    
    export {Atividades}