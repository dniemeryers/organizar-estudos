import React, {useState} from 'react';
import {Container, Button, Input} from './style';
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
          setMateria(prevMateria => [inMateria, ...prevMateria])
          setInmateria("")
          }    

       function click(){
           
        saveMateria()
       }

    return (
        <>  
            {dados.map((user, index)=>(
            <Header key={index} nome={user.nome} curso={user.curso} semestre={user.semestre}/>
            ))}
           
           <Container>
              
                <Input value={inMateria} onChange={event => setInmateria(event.target.value)} placeholder="Adicionar matéria..."></Input>
                
                <Button onClick={click}>+</Button>

                {materia.map((data,index)=>(
                <Materias key={index}  materia={data}/>
                ))}
            </Container>
           </>

    )
    }

    
   