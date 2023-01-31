import React from 'react';
import {Container, Button, Input} from './style';
import { Materias } from '../materia/index';
import { Header } from '../Header';

const Body = ({dados}) => {

       

    return (
        <>  
            {dados.map((usuarios,index)=>(
            <Header key={index} nome={usuarios.nome} curso={usuarios.curso} semestre={usuarios.semestre}/>
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