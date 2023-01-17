import React from 'react';
import {Container, Button, Input} from './style';
import { Materias } from '../materia/index';

const Body = () => {

       

    return (
        <>
           <Container>
            <Input placeholder="Adicionar matéria..."></Input>
            <Button>+</Button>
            <Materias>

            </Materias>
            </Container>
           
            
           </>

    )
    }

    
    export {Body}