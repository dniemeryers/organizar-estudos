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
    -webkit-appearance: none;
    background-color:#1c1c1c;
    display:flex;
    flex-direction: column;
    height:100%;
    padding-top:20px;
    border-radius:10px;
    align-items: center;
    margin:auto;
    margin-top:40px;
    box-shadow: 0px 0px 5px 6px white;
   
    
    
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
    padding:0px;
    border-radius:50%;
    border: 4px solid white;
    margin:-1px;
    
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    font-size: 22px;
    padding:10px 0 10px 0;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;

`
export const File = styled.div`
    display:flex;
    margin-top:-55px;
    margin-bottom:10px;
    margin-left:120px;
    padding-bottom:15px;


`
export const Text = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    border: 2px solid white;
`

export const Div = styled.div`
    display:flex;
    flex-direction:row;
`

export const Addimagen = styled.input`
    width:0px;
    margin-top:6px;
    padding-left:38px;
    margin-left:-38px;
    margin-top:-3px;
    padding-top:6px;
        @media screen and (max-width: 400px){
            width:0px;
            margin:0;
            margin-left:-5px;
            margin-top:3px;
            padding-left:33px;
    }
`
export const Salvar = styled.button`
    width:130px;
    height:50px;
    color:white;
    background:#1c1c1c;
    font-size:22px;
    font-weight:bold;
    border:none;
    border-radius:10px;
    box-shadow: 0px 0px 8px 2px white;
`
export const Buttons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    padding:20px;
    padding-top:60px;
`
export const H1 = styled.h1`
    color: white;
    font-size:22px;
    padding-top:20px;
    margin:0;
    text-align:center;
`