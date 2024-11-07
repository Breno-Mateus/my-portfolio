import styled from "styled-components";

export const BoxImg = styled.div`    
    border-radius: 12px;
`

export const BoxText = styled.div`
    padding: 1rem 1rem 0 1rem;
    
    display: flex;
    flex-direction: column;
    gap: .5rem;

    height: 100%;
`

export const Card = styled.div`
    background-color: #1f242d;

    width: 21.875rem;
    height: 22.875rem;

    border-radius: 10px;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
    
    display: flex;
    flex-direction: column;

    @media(max-width: 395px){
        height: 23rem;
    }
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
`

export const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: .5rem;

    &:hover{
        opacity: .7;
    }
`

export const Text = styled.p`
    font-size: .8rem;
`

export const DivTec = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
    margin: .5rem;
`

export const LinkProject = styled.a`
    cursor: pointer;
    text-decoration: none;
`

export const TextDecoration = styled.span`
    font-size: .8rem;
    color: #6C63FF;
`