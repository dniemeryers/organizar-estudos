import styled from 'styled-components';


export const Materia = styled.div`
position:relative;
width: 90%;
margin:20px;
height: auto;
padding-top:10px;
padding-bottom:5px;
border-radius:5px;
background-color:#4a4a4a;
box-shadow: 0px 0px 6px 3px white;
    
    @media screen and (min-width: 1024px){
    width:360px;
}
`
export const Container = styled.div`

display:flex;
justify-content:space-between;

`
export const Overflow = styled.div`
min-height:50px;
margin-bottom:40px;


@media screen and (min-width: 1024px){
   
    height:235px;
    overflow-x:auto;
    margin:0;
}

`


export const Input = styled.input`
    background: transparent;
    flex: 1;
    font-size:16px;
    border: 0;
    color: white;
    margin-left:20px;
`
export const Input1 = styled.input`
    background: transparent;
    flex: 1;
    font-size: 16px;
    border: 0;
    color: white;
    margin-left:20px;
    margin-bottom:8px;
    
`

export const Button = styled.button`
color:white;
background-color:#1c1c1c;
heigth:20px;
width:30px;
font-size:22px;
font-weight:bolder;
border-radius:50%;
margin-left: 10px;
border:none;
   
`
export const ButtonRemove = styled.button`
color:white;
position:absolute;
top:0;
right:0;
background-color:gray;
font-size:22px;
heigth:20px;
width:30px;
font-weight:bolder;
border-radius:5px;
margin-left: 10px;
border:none;
    &:hover{
         background-color:red;
         scale:1.2;
}
`
export const Div1 = styled.div`
position:relative;
justify-content:space-beteween;
`
export const ButtonLimpar = styled.button`
background-color:gray;
border-radius:5px;
border:none;
font-size:20px;
position:absolute;
bottom:5px;
font-weight:bolder;
color:white;
margin-top:10px;
margin-left:13px;
  &:hover{
    background-color:red;
    scale:1.2;
  }
`

