import React from 'react'
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture, Input, Addimagen, Salvar,Buttons,H1} from './styles';

const Inicio = () => {
  return (
    <>
    
    <Wrapper>    
      <Container>
      <H1>Organizando os Estudos</H1>
          <Row>
            <div>
            <UserPicture src={usuario} alt="user_default"/>
            <Addimagen>+</Addimagen>

            </div>
            
            <Input placeholder='Informe seu nome...'/>
            <Input placeholder='Informe o nome do curso... '/>
            <Input placeholder= 'Semenstre ou Bimestre' />
            <Buttons>
            <Salvar>SALVAR</Salvar>
            <Salvar>LIMPAR</Salvar>
            </Buttons>
        
          </Row>
      </Container>
    </Wrapper>
    </>
  )
}

export { Inicio }
