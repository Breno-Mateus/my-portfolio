import styled from "styled-components";

export const SectionStyle = styled.section`
    background: #1f242d;
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    gap: 5rem;

    @media(max-width: 860px){
        padding: 4rem;
    }
`

export const SkillSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    @media(max-width: 860px){
        padding: .5rem;
        gap: 2rem;
    }

`
export const Title = styled.h1`
    font-weight: 950;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;

    @media(max-width: 860px){
        font-size: 1.5rem;
    }
`

export const TextDecoration = styled.span`
    color: #6C63FF;
`