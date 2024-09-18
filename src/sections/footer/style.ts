import styled from "styled-components";

export const DivFooter = styled.div`
    background-color: #1f242d;
    height: 9.375rem;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 1rem;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 950;

    @media(max-width: 860px){
        font-size: 1rem;
    }
`

export const DivIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`

export const TextDecoration = styled.span`
    color: #6C63FF;
`

export const LinkProject = styled.a`
    padding: 0.313rem;

    display: flex;
    align-items: center;

    cursor: pointer;
`

export const IconsImage = styled.img`
    height: 2.188rem;
    width: 2.188rem;

    @media(max-width: 860px){
        height: 1.5rem;
        width: 1.5rem;
    }
`
export const Text = styled.p`
    font-weight: 700;

    @media(max-width: 860px){
        font-size: .7rem;
    }
`