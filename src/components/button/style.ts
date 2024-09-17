import styled from "styled-components";

export const Botao = styled.a`
    background-color: #6C63FF;
    color: #fff;
    font-weight: 800;
    border: 1px solid;
    border-radius: 20px;
    border-color: rgb(27, 38, 104);
    padding: 6px 10px;
    text-decoration: none;
    transition: background-color 0.3s;
    
    &:hover {
        cursor: pointer;
        background-color: #524af7;
    }

    @media(max-width: 860px){
        font-size: .7rem;
    }
`