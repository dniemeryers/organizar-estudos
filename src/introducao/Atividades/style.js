import styled from 'styled-components'

export const Container = styled.div`
display:flex;
position:relative;
justify-content:space-between;


`
export const Container2 = styled.div`
width:80%;
margin:auto;
margin-top:10px;

background-color:#1c1c1c;

border-radius:5px;
background: #929090;
box-shadow: inset -20px -20px 40px #838282,
            inset 20px 20px 40px #a19e9e;
box-shadow: 2px 2px 2px black;

&:hover{
    scale:1.2;
    z-index:1000;
   
}



`
export const Atividade =styled.input`
color:black;
background-color:transparent;
border:none;
width:90px;
font-weight:bolder;
font-size:12px;
margin:0 5px 0 5px;
`

export const Data = styled.input`
width: 75px;
background-color:#1c1c1c;
border:none;
color:white;
font-size:10px;
padding:1px;
border-radius:5px;


`

export const DiasFalta = styled.label`
color:black;
font-size:11px;
font-weight:bolder;
`
export const Descricao = styled.textarea`
width:95%;
color:black;
font-weight:bold;
font-size:12px;
height:auto;
margin:5px;
border:none;
background-color:transparent;
`
