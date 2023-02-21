import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture, Input, Addimagen, Salvar,Buttons,H1} from './styles';



function Inicio({onAddUser}) {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [semestre, setSemestre] = useState('')
    const [image, setImage] = useState(null);
   

    const navigate = useNavigate();

    function ir(){
        navigate('/Body')           
    }

    function handleSave(){
      const data = {nome, curso, semestre,image}
      onAddUser(data)     
    }

    
    function click(){
      ir()
      handleSave()      
    }

    function limpar(){
      setNome('')
      setCurso('')
      setSemestre('')
      setImage(null);
    }
    function handleImageChange(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  }

    
       
  return (
  <>   
    <Wrapper>    
      <Container>
          <H1>Organizando os Estudos</H1>
          <Row>
          <div>
              {image ? (
                <UserPicture src={image} onChange={event => setNome(event.target.value)} alt="user_image" />
              ) : (
                <UserPicture src={usuario} alt="user_default" />
              )}
              <Addimagen
              type="file"
              id="userImage"
              accept="image/*"
              onChange={handleImageChange}
              
              />
                
                  
            </div>
            <Input value={nome} onChange={event => setNome(event.target.value)} placeholder='Informe seu nome...'/>
            <Input value={curso} onChange={event => setCurso(event.target.value)}placeholder='Informe o nome do curso... '/>
            <Input value={semestre} onChange={event => setSemestre(event.target.value)} placeholder='Semenstre ou Bimestre' />
            <Buttons>
              <Salvar type="submit" onClick={click}>SALVAR</Salvar>
              <Salvar onClick={limpar}>LIMPAR</Salvar>
            </Buttons>
          </Row>
      </Container>
    </Wrapper>
  </>
  )
}

export { Inicio }
