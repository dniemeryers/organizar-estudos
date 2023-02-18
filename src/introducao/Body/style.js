
import styled from 'styled-components';

export const Container = styled.div`
margin-top:-1px;
padding-top: 20px;
background-color: #010101;
width: 100%;
height:auto;

`
export const Container2 = styled.div`
@media screen and (min-width:1024px){
   
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
    
}

`

export const Label = styled.label`
color:white;
font-size:20px;
margin-left 20px;
`

export const Button = styled.button`
color:#1c1c1c;
background-color:#4a4a4a;
heigth:30px;
width:30px;
font-size:22px;
font-weight:bolder;
border-radius:50%;
margin-left: 10px;
border:none;
margin-top:230px;

`

export const Materias = styled.div`
background-color:white;
heigth: 120px;
width: 120px;
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    heigth:50px;
    font-size: 22px;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;
    
`