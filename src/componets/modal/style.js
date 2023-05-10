import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top:${(props)=>{return props.enviado?'10':'-10'}}vw;
    z-index: 3;
    width: 30vw;
    height: 20vw;
    opacity: ${(props)=>{return props.enviado?'100':'0'}}%;
    padding: 1vw;
    background-color: orange;
    border-radius: 2vw;
    transition-duration: 1s;
    
    `;
export const SMenssagem = styled.p`
    text-align: center;
    opacity: ${(props)=>{props.enviado?'100':'0'}}%;
    font-size: 2vw;

    text-transform: uppercase;
    font-weight: bold;

`;