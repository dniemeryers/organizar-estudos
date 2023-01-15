import React from 'react'
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture, Input} from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <UserPicture src={usuario} alt="user_default"/>
            
            <Input placeholder='Informe seu nome...'/>
            <Input placeholder= 'Semenstre ou Bimestre' />
        
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
