import usuario from '../../assets/minha-conta.png'
import { Container, Wrapper,  Row, UserPicture,Inputdados, Apresentacao } from './styles';



export const Header = ({nome,curso,semestre}) =>{
  
 

    


  return (<>
  
     <Wrapper>
        <Container>
       
          <Row>
            <div>
            <UserPicture src={usuario} alt="user_default"/>
            </div>
            <Apresentacao>
            <Inputdados defaultValue={nome} placeholder={'Informe seu nome...'}/>
            <Inputdados defaultValue={curso} placeholder={'Informe seu curso...'}/>
            <Inputdados defaultValue={semestre} placeholder={'Informe seu período...'}/>
            </Apresentacao>
          </Row>
        </Container>
     </Wrapper>
    


    </>
    )
}


