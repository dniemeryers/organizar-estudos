import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture,Label, Apresentacao,Voltar } from './styles';
import { Body } from '../Body/index'
import {Inicio} from '../inicio/'

function Header ({nome,curso,semestre}) {
  
 

  const navigate = useNavigate();

    const voltar = () => {
        navigate('/Inicio')
    }

    


  return (<>
  
     <Wrapper>
        <Container>
        <Voltar onClick={voltar}>Voltar</Voltar>
          <Row>
            <div>
            <UserPicture src={usuario} alt="user_default"/>
            </div>
            <Apresentacao>
            <Label>{nome}</Label>
            <Label>{curso}</Label>
            <Label>{semestre}</Label>
            </Apresentacao>
          </Row>
        </Container>
     </Wrapper>
    <Body/>


    </>)
}

export { Header }
