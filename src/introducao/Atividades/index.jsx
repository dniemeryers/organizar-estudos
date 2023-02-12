import React, {useState} from 'react';

import {Container, Atividade, Data, DiasFalta, Descricao, Container2} from './style'

const Atividades = ({atividade}) => {

   
    let newDate = new Date()
 
    const [dataAtividade, setDataatividade] = useState(newDate)
   
    let dateInput = new Date(dataAtividade)   
   
  
   var dy = newDate.getDate();
   var mt = newDate.getMonth()+1;
   var yr = newDate.getFullYear();
   const today = `${yr}-${mt}-${dy}`;
   console.log(today)
   

   
       
  
   

let data ;
        if (dateInput.getMonth()-newDate.getMonth()===0){
           data = `${dateInput.getDate() - newDate.getDate()} dias`
           } else if (dateInput.getMonth() - newDate.getMonth()===1) {
            data = `${dateInput.getMonth() - newDate.getMonth()} mês e ${dateInput.getDate()-newDate.getDate()} dias`
                } else {
                   data = `${dateInput.getMonth() - newDate.getMonth()} meses e ${dateInput.getDate() - newDate.getDate()} dias`
                }
                
            
    return (
        <>
        <Container2>
            <Container>
                <div>
                  <Atividade defaultValue={atividade} placeholder="Atividade"></Atividade>
                  <Data defaultValue={dataAtividade} onChange={event => setDataatividade(event.target.value)}type="date"></Data>
                </div>
            <DiasFalta>{data}</DiasFalta>
            </Container>           
            <Descricao placeholder='Descrição...'>               
            </Descricao>
        </Container2>
        </>
    )
    }

    
    export {Atividades}