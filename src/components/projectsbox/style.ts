import styled from "styled-components";

export const BoxImg = styled.div`    
    width: 18.75rem;
    height: 13.75rem;
    border-radius: 12px;
    transition: .3s;
    overflow: hidden;
    
    @media(max-width: 860px){
        width: 11.75rem;
        height: 10.75rem;
    }
`

export const BoxText = styled.div`
    width: 100%;
    height: 35px;
    overflow: hidden;
    text-align: center;
    transition: .3s;
`

export const Card = styled.div`
    background-color: #1f242d;
    width: 21.875rem;
    height: 21.875rem;
    border-radius: 10px;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    &:hover{
        height: 25rem;
    }

    &:hover ${BoxImg} {
        transform: translateY(-50%);
        scale: .75;
        box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
    }

    &:hover ${BoxText} {
        transform: translateY(-50px);
        height: 250px;
    }

    @media(max-width: 860px){
        width: 16rem;
        height: 16rem;

        &:hover{
            height: 22rem;
        }
    }

`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
`

export const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 3rem;
    color: #fff;
    text-transform: uppercase;

    @media(max-width: 860px){
        font-size: .9rem;
    }
`

export const Text = styled.p`
    color: #fff;
    padding: 1rem 2rem 3rem 2rem;

    @media(max-width: 860px){
        font-size: .9rem;
    }
`

export const DivLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const LinkProject = styled.a`
    padding: 0.313rem;

    display: flex;
    align-items: center;

    transition: background-color 0.3s;
    
    &:hover{
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0.625rem;
        cursor: pointer;
    }
`

export const IconsImage = styled.img`
    height: 1.563rem;
    width: 1.563rem;
`