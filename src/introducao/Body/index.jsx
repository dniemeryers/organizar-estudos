import React from 'react';
import {Container, Button, Input} from './style';
import { Materias } from '../materia/index';
import { Header } from '../Header';

function Body ({dados}){

       

    return (
        <>  
            {dados.map((user, index)=>(
            <Header key={index} nome={user.nome} curso={user.curso} semestre={user.semestre} />
            ))}
           
           <Container>
                <Input placeholder="Adicionar matéria..."></Input>
                <Button>+</Button>
                <Materias/>
                
            
            </Container>
           
            
           </>

    )
    }

    
    export {Body}