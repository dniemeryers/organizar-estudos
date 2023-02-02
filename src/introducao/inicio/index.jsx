import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture, Input, Addimagen, Salvar,Buttons,H1} from './styles';



function Inicio({onAddUser}) {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [semestre, setSemestre] = useState('')

   

    const navigate = useNavigate();
    function ir(){
        navigate('/Body')
            
    }

    function handleSave(){
      const data = {nome, curso, semestre}
      console.log(data)
      onAddUser(data)
     
    }

    
    function click (){
      ir();
      handleSave();
      
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
            <Input value={nome} onChange={event => setNome(event.target.value)} placeholder='Informe seu nome...'/>
            <Input value={curso} onChange={event => setCurso(event.target.value)}placeholder='Informe o nome do curso... '/>
            <Input value={semestre} onChange={event => setSemestre(event.target.value)} placeholder='Semenstre ou Bimestre' />
            <Buttons>
              <Salvar type="submit" onClick={click}>SALVAR</Salvar>
              <Salvar>LIMPAR</Salvar>
            </Buttons>
          </Row>
      </Container>
    </Wrapper>
  </>
  )
}

export { Inicio }
