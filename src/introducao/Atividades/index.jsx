import React, {useState} from 'react';

import {Container, Atividade, Data, DiasFalta, Descricao, Container2} from './style'

const Atividades = ({atividade}) => {

   
    let newDate = new Date()
 
    const [dataAtividade, setDataatividade] = useState(newDate)
   
    let dateInput = new Date(dataAtividade)   
   
  
   var dy = dateInput.getDate()-newDate.getDate();
   var mt = dateInput.getMonth()-newDate.getMonth();
   let data ;

   if(dy<0){
    dy = Math.abs(dy)
   }
   if(mt<0){
    mt = Math.abs(mt)
   }
       
    if(dateInput<newDate){
        data=`Data inválida`
    }else if(dy === newDate.getDate() && mt === newDate.getMonth()){
        data=`Informe data`
    }else if (mt===0 && dy===1){
        data= `${dy} dia`
    }else if (mt===0){
        data = `${dy} dias`
    }else if(mt===1 && dy===1){
        data = `${mt} mês e ${dy} dia`
    }else if (mt===1) {
        data = `${mt} mês e ${dy} dias`
    }else{
        data = `${mt} meses e ${dy} dias`
    }
                
            
    return (
        <>
        <Container2>
            <Container>
                <div>
                  <Atividade defaultValue={atividade} placeholder="Atividade"></Atividade>
                  <Data min="2023-02-15" max="2023-12-31"value={dataAtividade} onChange={event => setDataatividade(event.target.value)}type="date"></Data>
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