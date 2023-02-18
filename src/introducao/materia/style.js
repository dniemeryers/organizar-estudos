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

@media screen and (min-width: 1024px){
   
    width:350px;
    overflow-x:auto;
}

`
export const Container = styled.div`

display:flex;
justify-content:space-between;

`


export const Input = styled.input`
    background: transparent;
    flex: 1;
    font-size: 20px;
    border: 0;
    color: white;
    margin-left:20px;
`
export const Input1 = styled.input`
    background: transparent;
    flex: 1;
    font-size: 20px;
    border: 0;
    color: white;
    margin-left:20px;
    margin-bottom:20px;
    
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
background-color:red;
font-size:22px;
heigth:20px;
width:30px;
font-weight:bolder;
border-radius:5px;
margin-left: 10px;
border:none;
`
export const Div1 = styled.div`
position:relative;
justify-content:space-beteween;
`
export const ButtonLimpar = styled.button`
background-color:red;
border-radius:5px;
border:none;
font-size:20px;
font-weight:bolder;
color:white;
margin-top:10px;
margin-left:13px;
`

