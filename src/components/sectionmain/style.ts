import styled, {keyframes} from "styled-components";

export const SecaoPrincipal = styled.section`
    background: #1f242d;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8rem;
`

export const DevImage = styled.img`
    height: 20rem;
`

export const DivText = styled.div`
    width: 35%;
`

export const TextoPrimario = styled.h1`
    font-size: 3rem;
    font-weight: 950;
`

export const TextoSecundario = styled.h1`
    font-size: 2rem;
    font-weight: 950;
`

const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: #fff; }
`;

export const TextoEstilo = styled.h1`
    font-size: 2rem;
    font-weight: 950;
    color: #6C63FF;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid black;
    animation: 
    ${typing} 3.5s steps(40, end) infinite alternate, 
    ${blinkCaret} 0.75s step-end infinite;
`