
import styled from 'styled-components';

export const Container = styled.div`
margin-top:-1px;
padding-top: 230px;
background-color: #010101;
width: 100%;
height:auto;


`
export const Container2 = styled.div`
@media screen and (min-width:1024px){
   
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 390px;
  
    
}

`


export const Label = styled.label`
color:white;
font-size:20px;
margin-left 20px;
`

export const Button = styled.button`
color:white;
display:inline;
background-color:#4a4a4a;
heigth:30px;
width:30px;
font-size:22px;
font-weight:bolder;
border-radius:50%;
border:none;
margin-left:10px;


`
export const Addmateria = styled.div`
display:flex;
flex-direction:row;
background-color:black;
width:500px;
heigth:100px;
z-index:1000;
position:fixed;
padding:30px 30px 30px 0;
margin-top:160px;
@media screen and (min-width:1024px){
  padding-right:1200px
}
`

export const Materias = styled.div`
background-color:white;
heigth: 120px;
width: 120px;
`
export const Input = styled.input`
    background: black;
    flex: 1;
    heigth:50px;
    width:100px;
    font-size: 22px;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;
    
`

export const Removetudo = styled.button`
background-color:red;
color:white;
font-weight:bolder;
width:110px;
margin-left:60px;
`