import React, {useState} from 'react';
import {Container,Container2, Button, Input,Addmateria,Removetudo} from './style';
import { Materias } from '../materia/index';
import { Header } from '../Header';

export const Body = ({dados})=>{

        const [inMateria, setInmateria] = useState("")
        const [materia, setMateria,] = useState([])
             
       /* function saveMateria(data){ 
        let newMateria = [...materia]
        newMateria.push(inMateria)
        setMateria(newMateria)
        setInmateria('')
        }*/
        
        function saveMateria(data){
          setMateria(prevMateria => [ ...prevMateria,inMateria])
          setInmateria("")
          }    
        
        function limparTudo(){
            setMateria([])
        }

       function click(){   
        saveMateria()
       }


    return (
        <>  
            <Header/> 
            {dados.map((user, index)=>(
            <Header key={index} nome={user.nome} curso={user.curso} semestre={user.semestre}/>
            ))}                   
            <Addmateria>       
                <Input value={inMateria} onChange={event => setInmateria(event.target.value)} placeholder="Add matéria..."></Input>                
                <Button onClick={click}>+</Button>
                <Removetudo onClick={limparTudo}>Limpar tudo</Removetudo>
            </Addmateria>  
            <Container>
                <Container2>
                    {materia.map((data,index)=>(
                    <Materias key={index}  materia={data} />
                    ))}
                   
                </Container2>
            </Container>
        </>
    )
    }

    
   