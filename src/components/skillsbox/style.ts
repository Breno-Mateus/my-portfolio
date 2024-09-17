import styled from "styled-components";

export const Box = styled.div`
    background: #323946;

    height: 9.375rem;
    width: 9.375rem;

    border-radius: 0.938rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media(max-width: 860px){
        height: 6.375rem;
        width: 6.375rem;
    }
`

export const Picture = styled.img`
    width: 3.125rem;
    height: 3.125rem;

    @media(max-width: 860px){
        height: 2.125rem;
        width: 2.125rem;
    }
`

export const Text = styled.p`
    color: #fff;
    font-weight: 800;
    text-align: center;

    @media(max-width: 860px){
        font-size: .8rem;
    }
`