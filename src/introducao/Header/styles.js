import styled  from 'styled-components';

export const Container = styled.div`
   
    position:relative;
    max-width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px 0 0 10px;
`

export const Row = styled.div`
    display:flex;
    height:100%;
    padding-top:80px;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #010101;
    display:flex;

    position:fixed;
    z-index:1000;
    height: 220px;
    margin-left:0;
    @media screen and (max-width: 400px){
        display:flex;
        flex-direction:column;
        height:300px;
        
    }
    @media screen and (min-width:1024px){
        width:1500px;
        
    }
    
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
    
   
    
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    font-size: 20px;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;
`

export const Apresentacao = styled.div`
heigth:120px;
display:flex;
flex-direction:column;
`

export const Inputdados = styled.input`
color: white;
background-color:black;
border:none;
font-size:20px;
margin:7px;
`

export const Voltar = styled.button`
color:white;
font-size:18px;
height:50px;
width:50px;
background:transparent;
border:none;
position:absolute;
left:-25px;
top:10px;
`


export const Mensagem = styled.label`
color:white;
font-size:16px;
padding-left:10px;
margin-top:10px;

@media screen and (min-width:1024px){
    position:fixed;
    right:50px;
    top:15px;
    font-size:22px;
    
}
`

export const Clock = styled.label`
background-color:white;
color:black;
position:fixed;
right:0px;
top:0px;
`