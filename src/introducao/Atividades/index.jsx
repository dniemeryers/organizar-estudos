import React, {useState} from 'react';

import {Container, Atividade, Data, DiasFalta, Descricao, Container2} from './style'

const Atividades = ({atividade}) => {

   
    let newDate = new Date()
    const [dataAtividade, setDataatividade] = useState(newDate)
    
    let dateInput = new Date(dataAtividade)   
    var dy = (dateInput.getDate()+1)-(newDate.getDate());
    var mt = dateInput.getMonth()-newDate.getMonth();
    let data = `Informe data`;
    console.log(dy)
    

   if(dy<0){
    dy = Math.abs(dy)
   }

   if(mt<0){
    mt = Math.abs(mt)
   }
     
   
    if(dy===0 && mt===0){
        data= `Hoje`
    }else if(dy===1 && mt===0){
        data= `Amanhã`
    }else if(dateInput<newDate){
        data=`Informe data`
    }else if (mt===0 && dy===1){
        data= `${dy} dia`
    }else if (mt===0){
        data = `${dy} dias`
    }else if(mt===1 && dy===1){
        data = `${mt} mês e ${dy} dia`
    }else if (mt===1 && dy===0) {
            data = `${mt} mês`
    }else if (mt===1) {
        data = `${mt} mês e ${dy} dias`
    }else if(mt>1 && dy===0){
        data = `${mt} meses`
    }else if(mt>1 && dy===1){
        data = `${mt} meses e ${dy} dia`
    }else if(dy===0||mt===0){

    }else{
        data = `${mt} meses e ${dy} dias`
    }
       
    console.log(data)
            
    return (
        <>
        <Container2>
            <Container>
                <div>
                  <Atividade defaultValue={atividade} placeholder="Atividade"></Atividade>
                  <Data min="2023-02-15" max="2023-12-31" value={dataAtividade} onChange={event => setDataatividade(event.target.value)}type="date"></Data>
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