import React from 'react';

import {Container, Atividade, Data, DiasFalta, Descricao, Container2} from './style'

const Atividades = () => {

       

    return (
        <>
        <Container2>
            <Container>
                <div>
                  <Atividade>Atividade</Atividade>
                  <Data type="date"></Data>
                </div>
            <DiasFalta>10 dias</DiasFalta>

            </Container>
            
            <Descricao placeholder='Descrição...'>
                
            </Descricao>
        </Container2>
            
        </>

    )
    }

    
    export {Atividades}