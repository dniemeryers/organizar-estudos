import usuario from '../../assets/minha-conta.png'
import capa from '../../assets/estudo-ativo.jpg'
import { Container, Wrapper,  Row, UserPicture,Inputdados, Apresentacao,Mensagem} from './styles';



export const Header = ({nome,curso,semestre}) =>{
  
 let newDate = new Date();
 
 let mes = newDate.getMonth() ;
  
  if(mes===0){
    mes=`Janeiro`
  }else if(mes===1){
    mes=`Fevereiro`
  }else if(mes===2){
    mes=`Março`
  }else if(mes===3){
    mes=`Abril`
  }else if(mes===4){
    mes=`Maio`
  }else if(mes===5){
    mes=`Junho`
  }else if(mes===6){
    mes=`Julho`
  }else if(mes===7){
    mes=`Agosto`
  }else if(mes===8){
    mes=`Setembro`
  }else if(mes===9){
    mes=`Outubro`
  }else if(mes===10){
    mes=`Novembro`
  }else{
    mes=`Dezembro`
  }

  
  return (<>
  
     <Wrapper>
           <Mensagem>{`Olá Aluno hoje é: ${newDate.getDate()} de ${mes} de ${newDate.getFullYear()}`}</Mensagem>
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
