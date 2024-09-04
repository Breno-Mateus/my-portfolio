import styled from "styled-components";

export const Cabecalho = styled.header`
    background: #1f242d;
    color: #fff;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: .5s;
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 2rem;
    border: 1px solid #6C63FF;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    font-weight: 800;

    &:hover {
        color: #6C63FF;
        cursor: pointer;
    }
`