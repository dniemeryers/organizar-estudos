import React, {useState} from 'react'
import { useNavigate  } from "react-router-dom";
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture, Input, Addimagen, Salvar,Buttons,H1} from './styles';

const Inicio = () => {

    const [nome, setNome] = useState(''); 
    const [curso, setCurso] = useState('');
    const [semestre, setSemestre] = useState(''); 

    

    const navigate = useNavigate();
    const ir = () => {
        navigate('/Header')
    
    }

   

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
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Informe seu nome...'/>
            <Input value={curso} onChange={(e) => setCurso(e.target.value)}placeholder='Informe o nome do curso... '/>
            <Input value={semestre} onChange={(e) => setSemestre(e.target.value)} placeholder='Semenstre ou Bimestre' />
            <Buttons>
              <Salvar onClick={ir}>SALVAR</Salvar>
              <Salvar>LIMPAR</Salvar>
            </Buttons>
          </Row>
      </Container>
    </Wrapper>
  </>
  )
}

export { Inicio }
