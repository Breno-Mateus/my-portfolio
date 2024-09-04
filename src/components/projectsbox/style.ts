import styled from "styled-components";

export const Card = styled.div`
    background-color: #1f242d;
    width: 300px;
    height: 300px;
    margin: 2rem;
    border-radius: 10px;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    height: 150px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Text = styled.p`
    font-size: .8rem;
    padding: 1rem;
    font-weight: 500;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
`

export const DivLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 2rem;
`
export const LinkProject = styled.a`
    padding: 0.313rem;

    display: flex;
    align-items: center;

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