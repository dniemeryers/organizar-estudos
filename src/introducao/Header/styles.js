import styled  from 'styled-components';

export const Container = styled.div`
   
    
    max-width: 80%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
`

export const Row = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    padding-top:20px;
    
    align-items: center;
    margin:auto;
    
`;

export const Wrapper = styled.div`
    background-color: #151515;
  
    height: 220px;
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
    
   
    
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    font-size: 20px;
    border: 0;
    color: #FFFFFF;
    margin-left:20px;
`