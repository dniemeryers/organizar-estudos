import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture,Inputdados, Apresentacao } from './styles';



function Header ({nome,curso,semestre}) {
  
 

    


  return (<>
  
     <Wrapper>
        <Container>
       
          <Row>
            <div>
            <UserPicture src={usuario} alt="user_default"/>
            </div>
            <Apresentacao>
            <Inputdados defaultValue={nome} placeholder={'Informe seu nome...'}></Inputdados>
            <Inputdados defaultValue={curso} placeholder={'Informe seu curso...'}></Inputdados>
            <Inputdados defaultValue={semestre} placeholder={'Informe seu período...'}></Inputdados>
            </Apresentacao>
          </Row>
        </Container>
     </Wrapper>
    


    </>)
}

export { Header }
