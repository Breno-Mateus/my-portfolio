import styled from "styled-components";

export const SectionStyle = styled.section`
    background: #323946;
    min-height: 100vh;
    min-width: 100%;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.h1`
    font-weight: 950;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
`

export const TextDecoration = styled.span`
    color: #6C63FF;
`

export const DivMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 5rem;

    @media(max-width: 1040px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 5rem;
        padding: 0;
    }
`

export const Image = styled.img`
    width: 18.75rem;
    height: 18.75rem;

    border-radius: 50%;
    border: 1px solid #6C63FF;

    @media(max-width: 860px){
        margin-top: 2rem;
        width: 10rem;
        height: 10rem;
    }
`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: justify;
    line-height: 1.5;

    @media(max-width: 860px){
        text-align: center;
    }
`