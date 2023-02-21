import styled  from 'styled-components';

export const Container = styled.div`
    max-width: 80%;
    height: 120%px;
    align-items: center;
    margin:auto;
    @media screen and (min-width: 1024px){
        width:350px;
    }
    
`

export const Row = styled.div`
background-color:#1c1c1c;
    display:flex;
    flex-direction: column;
    height:100%;
    padding-top:20px;
    border-radius:10px;
    align-items: center;
    margin:auto;
    margin-top:40px;
   
    
    
`

export const Wrapper = styled.div`
    background-color: #010101;
    height: 100vh;
    margin-left:0;
    justify-content: center;
    align-items: center;
    margin:auto;
   
`

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 150px;
    height: 150px;
    border-radius:50%;
    
   
    
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    font-size: 22px;
    
    padding:20px 0 30px 0;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;

`
export const Addimagen = styled.input`
height:30px;
width:30px;
border-radius:50%;
margin-left:-40px;
font-size:20px;
font-weight:bold;
border:none;
`
export const Salvar = styled.button`
width:130px;
height:50px;
backgrund-color:#6d6d6d;
font-size:22px;
font-weight:bold;
border:none;
border-radius:10px;
`
export const Buttons = styled.div`
width:100%;
display:flex;
justify-content:space-around;
padding:20px;
`
export const H1 = styled.h1`
color white;
font-size:22px;
padding-top:20px;

margin:0;
text-align:center;
`